

import { headers } from "/header/header.js";
import { footer } from "/footer/footer.js";
import { animationDOWNUP } from "/communJS/animation.js";

document.addEventListener("DOMContentLoaded", (event) => {
    headers()
    footer()
    afficherNouvelleCollection()
  });

const fetching = async (what) => {
  try {
    const data = await fetch(`http://localhost:3000/api/`+what)
    const response = await data.json()
    return response
  } catch (error) {
    console.error("error lors de la recuperation des donne")
  }

}


const afficherNouvelleCollection = async () => {
  const parentElement = document.getElementById("lesCard");
  const collection = await fetching("getAllCollections");
  let FourCollections = collection.slice(0, 4);

  console.log(FourCollections)
  let nombre = 0;
  FourCollections.forEach((item) => {
    nombre++
    console.log(item)
    let card = document.createElement("div");
    card.className = "newCard hidden2"; 
    if(nombre==4) {
      card.id = "voirPlus"; 
      card.innerHTML += `
        <div id="">
          <h1>Voir plus ...</h1>
        </div>
    `;    
    } else {
    card.innerHTML += `
    <div>
        <div class="imgPrincipalContainer" style="width: 16.5em;">
                <img class="imageProduitPrincipal" src="${item.images[0]}" height="350em" alt="">
        </div>  
    </div>
    
    <div class= "basCard">
        <div>
            <div>
              <h3><a class="lienProduit">${item.NomProduits}</a></h3>
            </div>    
            <div>
                <h2>${item.Prix % 1 !== 0 ? '$' + item.Prix : '$' + item.Prix.toFixed(2)}</h2>
            </div>
        </div>  
        <div class="bouttonClass">
              <button> Ajouter au panier </button>
        </div>  
    </div>    
 
    
    `}
    
    parentElement.appendChild(card); 
    animationDOWNUP(".hidden2")

  });
  document.getElementById("voirPlus").addEventListener("click", ()=> {
    location.href = "/"
  
  })

}



animationDOWNUP(".hidden1")