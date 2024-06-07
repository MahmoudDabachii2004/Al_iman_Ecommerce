const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;
const produits = require('./Routes/Produits/Produit.js');


app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public','pagePrincipal','Acceuil', 'index.html'));
});


app.use('', produits);


app.listen(PORT, () => {
    console.log("Server listening on Port", PORT);
});


