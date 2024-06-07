
const express = require("express");
const collections = express.Router();
const db = require("../../db/db.js");

collections.get('/getAllCollections', (req,res) => {
    let sql = `SELECT * FROM Produits join NouvelleCollection on Produits.id_Produit = NouvelleCollection.id_Produit join ImageProduits ON Produits.id_Produit = ImageProduits.id_Produit`;    
    try {
        db.all(sql, [], (err, rows) => {
            if (err) {
            throw err;
            }
                 // Create a map to store products with their images grouped
                let productsWithImages = {};

                // Loop through each row and group images by product id
                rows.forEach(row => {
                    const { id_Produit, id_TypeProduits, NomProduits, Description, Prix, IMAGE } = row;
                    
                    // If the product doesn't exist in the map, initialize it with an empty array
                    if (!productsWithImages[id_Produit]) {
                        productsWithImages[id_Produit] = {
                            id_Produit,
                            id_TypeProduits,
                            NomProduits,
                            Description,
                            Prix,
                            images: []
                        };
                    }
                    
                    // Push the image URL to the images array of the corresponding product
                    productsWithImages[id_Produit].images.push(IMAGE);
                });

                // Convert the map values (grouped products) to an array
                const groupedProducts = Object.values(productsWithImages);
                
                console.log(groupedProducts);
                res.json(groupedProducts);
            });
            
    } catch (error) {
        
    }
})

module.exports = collections;
