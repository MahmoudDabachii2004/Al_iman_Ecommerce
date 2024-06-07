

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
    const data = await fetch(`http://localhost:3000/`+what)
    const response = await data.json()
    return response
  } catch (error) {
    console.error("error lors de la recuperation des donne")
  }

}


const afficherNouvelleCollection = async () => {
  const parentElement = document.getElementById("lesCard");
  const collection = await fetching("getAllProduits");
  let FourCollections = collection.slice(0, 4);

  console.log(FourCollections)

  FourCollections.forEach((item) => {
    console.log(item)
    let card = document.createElement("div");
    card.className = "newCard"; 
    card.innerHTML = `
    <div>
        <div>
                <img src="/media/test.jpg" height="355em" alt="">
        </div>  
    </div>

    <div>
        <div>
            <div>
              <h3><a>${item.NomProduits}</a></h3>
            </div>    
            <div>
                <h2>${item.Prix}</h2>
            </div>
        </div>  
        <div>
              <button> Ajouter au panier </button>
        </div>  
    </div>    
 
    
    `
    
    parentElement.appendChild(card); 
  });
}


animationDOWNUP(".hidden1")