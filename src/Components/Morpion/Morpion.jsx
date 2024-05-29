import React, { useRef, useState } from "react";
import "./Morpion.css";
import circle_icon from "../Assets/circle.png";
import cross_icon from "../Assets/cross.png";

let data = ["", "", "", "", "", "", "", "", ""];

const Morpion = () => {
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);
  let titleRef = useRef(null);

  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);
  let box9 = useRef(null);

  let boxArray = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

  const toggle = (e, num) => {
    if (lock) {
      return 0;
    }
    if (data[num] !== "") {
      return;
    }
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src='${cross_icon}'>`;
      data[num] = "x";
      setCount(++count);
    } else {
      e.target.innerHTML = `<img src='${circle_icon}'>`;
      data[num] = "o";
      setCount(++count);
    }
    ifWin();
  };

  const ifWin = () => {
    if (
      (data[0] === data[1] && data[1] === data[2] && data[2] !== "") ||
      (data[3] === data[4] && data[4] === data[5] && data[5] !== "") ||
      (data[6] === data[7] && data[7] === data[8] && data[8] !== "") ||
      (data[0] === data[3] && data[3] === data[6] && data[6] !== "") ||
      (data[1] === data[4] && data[4] === data[7] && data[7] !== "") ||
      (data[2] === data[5] && data[5] === data[8] && data[8] !== "") ||
      (data[0] === data[4] && data[4] === data[8] && data[8] !== "") ||
      (data[2] === data[4] && data[4] === data[6] && data[6] !== "")
    ) {
      win(data[count % 2 === 0 ? 1 : 0]);
    } else if (count === 9) {
      draw();
    }
  };

  const win = (winner) => {
    setLock(true);
    if (winner === "x") {
      titleRef.current.innerHTML = `Félicitation, <img src=${cross_icon}> vous a battu à plate couture ;)`;
    } else if (winner === "o") {
      titleRef.current.innerHTML = `Félicitation, <img src=${circle_icon}> vous a battu à plate couture ;)`;
    }
  };

  const draw = () => {
    setLock(true);
    titleRef.current.innerHTML = "Vous êtes nul ! Donc match nul :/";
  };

  const reset = () => {
    setLock(false);
    data = ["", "", "", "", "", "", "", "", ""];
    setCount(0);
    titleRef.current.innerHTML = 'Morpion en <span>ReactJs<span>';
    boxArray.forEach((e) => {
      e.current.innerHTML = "";
    });
  };

  return (
    <div>
      <div className="container">
        <h1 className="title" ref={titleRef}>
          Morpion en <span>ReactJs</span>
        </h1>
        <div className="board">
          <div className="row1">
            <div
              className="boxes"
              ref={box1}
              onClick={(e) => {
                toggle(e, 0);
              }}
            ></div>
            <div
              className="boxes"
              ref={box2}
              onClick={(e) => {
                toggle(e, 1);
              }}
            ></div>
            <div
              className="boxes"
              ref={box3}
              onClick={(e) => {
                toggle(e, 2);
              }}
            ></div>
          </div>

          <div className="row2">
            <div
              className="boxes"
              ref={box4}
              onClick={(e) => {
                toggle(e, 3);
              }}
            ></div>
            <div
              className="boxes"
              ref={box5}
              onClick={(e) => {
                toggle(e, 4);
              }}
            ></div>
            <div
              className="boxes"
              ref={box6}
              onClick={(e) => {
                toggle(e, 5);
              }}
            ></div>
          </div>

          <div className="row3">
            <div
              className="boxes"
              ref={box7}
              onClick={(e) => {
                toggle(e, 6);
              }}
            ></div>
            <div
              className="boxes"
              ref={box8}
              onClick={(e) => {
                toggle(e, 7);
              }}
            ></div>
            <div
              className="boxes"
              ref={box9}
              onClick={(e) => {
                toggle(e, 8);
              }}
            ></div>
          </div>
        </div>
        <button className="reset" onClick={reset}>
          RESET
        </button>
      </div>
    </div>
  );
};

export default Morpion;
