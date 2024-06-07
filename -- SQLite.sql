-- SQLite

-- Creating the TypeProduits table
CREATE TABLE TypeProduits (
    id_TypeProduits INTEGER PRIMARY KEY,
    NomTypeProduit TEXT NOT NULL
);

-- insert into TypeProduits(NomTypeProduit) VALUES("Abaya")
-- insert into TypeProduits(NomTypeProduit) VALUES("Khol")
-- insert into TypeProduits(NomTypeProduit) VALUES("Niqab")


-- Creating the Produits table
CREATE TABLE Produits (
    id_Produit INTEGER PRIMARY KEY,
    id_TypeProduits INTEGER,
    NomProduits TEXT NOT NULL,
    Description TEXT,
    Prix REAL,
    FOREIGN KEY (id_TypeProduits) REFERENCES TypeProduits(id_TypeProduits)
);


insert into Produits(id_TypeProduits,NomProduits,Description,Prix) VALUES(3,"Niqab avec pendentif saoudien","🤍 Acheté à Mecca 🕋 sur place ! 🤍 Niqab longueur médium Share",18)
insert into Produits(id_TypeProduits,NomProduits,Description,Prix) VALUES(3,"Niqab Saoudien","🤍Sans pendentif 🤍Medium 🤍Acheté sur place à Mecca",18)



-- Creating the Stockage table
CREATE TABLE Stockage (
    id_Stockage INTEGER PRIMARY KEY,
    id_Produit INTEGER,
    NBStock INTEGER,
    FOREIGN KEY (id_Produit) REFERENCES Produits(id_Produit)
);

-- Creating the ImageProduits table
CREATE TABLE ImageProduits (
    id_ImageProduit INTEGER PRIMARY KEY,
    id_Produit INTEGER,
    IMAGE TEXT,
    FOREIGN KEY (id_Produit) REFERENCES Produits(id_Produit)
);

-- Creating the NouvelleCollection table
CREATE TABLE NouvelleCollection (
    id_Collection INTEGER PRIMARY KEY,
    id_Produit INTEGER,
    FOREIGN KEY (id_Produit) REFERENCES Produits(id_Produit)
);

-- Creating the Admin table
CREATE TABLE Admin (
    id_Admin INTEGER PRIMARY KEY,
    Username TEXT UNIQUE NOT NULL,
    Password TEXT NOT NULL
);


