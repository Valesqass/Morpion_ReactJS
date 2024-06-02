const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// Route pour recevoir les données du frontend
app.post('/api/clickedBoxes', (req, res) => {
    const clickedBoxes = req.body.clickedBoxes;
    const clickTime = new Date();

    // Faites ce que vous voulez avec les données, par exemple, les enregistrer dans une base de données

    console.log('Boxes clicked:', clickedBoxes);
    console.log('Time of click:', clickTime);

    res.status(200).send('Data received successfully');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
