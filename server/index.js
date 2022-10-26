const path = require('path');
const express = require('express');
const app = express(); 
const port = 3000;

app.use(express.static(path.join(__dirname, '../front', 'static')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../front', 'index.html'));
});

app.get("/hobbies", (req, res) => {
    res.sendFile(path.join(__dirname, '../front', 'hobbies.html'));
});



app.listen(port, () => console.log(`app listening on port ${port}`));


