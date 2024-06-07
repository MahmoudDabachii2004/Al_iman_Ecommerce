
const express = require("express");
const produits = express.Router();
const db = require("../../db/db.js");

produits.get('/getAllProduits', (req,res) => {
    let sql = `SELECT * FROM PRODUITS`;    
    try {
        db.all(sql, [], (err, rows) => {
            if (err) {
            throw err;
            }
                console.log(rows);
                res.json(rows)
            });
            
    } catch (error) {
        
    }
})

module.exports = produits;
