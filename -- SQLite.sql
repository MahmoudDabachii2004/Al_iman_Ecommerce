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

insert into ImageProduits(id_Produit,IMAGE) VALUES(1,"https://media.discordapp.net/attachments/1248721677001424906/1248722321326211092/5F3B8EFE-FF6F-43CC-B06C-83425ECCE5F1.webp?ex=6664b2c9&is=66636149&hm=70dc321a199b76ae6a31b3d148415d97ae93d61359559f18f83f086a86a1acbd&=&format=webp&width=512&height=683");
insert into ImageProduits(id_Produit,IMAGE) VALUES(1,"https://media.discordapp.net/attachments/1248721677001424906/1248722321909485760/5BF3E56F-7674-4C23-ACEA-0BA5A546D83A.webp?ex=6664b2c9&is=66636149&hm=2493c1c029de189258153d069fe290a9c917a6dd0317a213cef2fd133c688383&=&format=webp&width=512&height=683");
insert into ImageProduits(id_Produit,IMAGE) VALUES(1,"https://media.discordapp.net/attachments/1248721677001424906/1248722322454609950/5C7B1A96-12C2-48A0-938C-58DB0940F867.webp?ex=6664b2c9&is=66636149&hm=761ec4b5f70d87d2d2f6e44fe6e14c3df7c9cbfe596fb3d52f0c933d86df0732&=&format=webp&width=384&height=683");

insert into ImageProduits(id_Produit,IMAGE) VALUES(2,"https://media.discordapp.net/attachments/1248721677001424906/1248722082049822843/440155766_17851554927187240_7655144117315862001_n.webp?ex=6664b290&is=66636110&hm=eb94a57448b202a375a9774ffee8237184fc64e80f033ba0b17976280c788a5a&=&format=webp&width=632&height=683");
insert into ImageProduits(id_Produit,IMAGE) VALUES(2,"https://media.discordapp.net/attachments/1248721677001424906/1248722082540290088/440263817_17851554936187240_8741679706855004205_n.webp?ex=6664b290&is=66636110&hm=990f5c199984c2be1bfd7f24ea8a46052fa630987aa94aae152e50b5e6ca0907&=&format=webp&width=632&height=682");

-- Creating the NouvelleCollection table
CREATE TABLE NouvelleCollection (
    id_Collection INTEGER PRIMARY KEY,
    id_Produit INTEGER,
    FOREIGN KEY (id_Produit) REFERENCES Produits(id_Produit)
);
insert into NouvelleCollection(id_Produit) VALUES(1);
insert into NouvelleCollection(id_Produit) VALUES(2);


-- Creating the Admin table
CREATE TABLE Admin (
    id_Admin INTEGER PRIMARY KEY,
    Username TEXT UNIQUE NOT NULL,
    Password TEXT NOT NULL
);


