





export const headers = () => {
    let header = document.createElement("header");

    header.innerHTML = `
    <div class="test">
        <div class="Annonce">
        <p class="textAnnonce">السٌَلامُ عَلَيْكُمْ وَ رَحْمَةُ اللهِ وَ بَرَكاتُهْ</p>
        </div>
    </div>
    <div class="BigHead">
        <div class="insideBigHead">
        <svg xmlns="http://www.w3.org/2000/svg" class="forSmallScreenBar" id="smallScreenBar" aria-hidden="true" focusable="false" fill="none" viewBox="0 0 18 16">
            <path d="M1 .5a.5.5 0 100 1h15.71a.5.5 0 000-1H1zM.5 8a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1A.5.5 0 01.5 8zm0 7a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1a.5.5 0 01-.5-.5z" fill="currentColor">
        </path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" id="searchSVG">
                <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"/>
            </svg>
            <div class="mainBigHead">
            <img class="logoAlIman" src="/media/asset 0.png" alt="">
            <ul class="headList">
                <li><a href="/" id="Accueil">Accueil</a></li>
                <li><a href="/collections/all">Catalogue</a></li>
                <li><a href="/pages/contact">Contact</a></li>
                <li><a href="/collections/niqabs">Niqabs</a></li>
            </ul>
            
            </div>
            <svg class="icon icon-cart-empty" id="iconCart" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none">
                <path d="m15.75 11.8h-3.16l-.77 11.6a5 5 0 0 0 4.99 5.34h7.38a5 5 0 0 0 4.99-5.33l-.78-11.61zm0 1h-2.22l-.71 10.67a4 4 0 0 0 3.99 4.27h7.38a4 4 0 0 0 4-4.27l-.72-10.67h-2.22v.63a4.75 4.75 0 1 1 -9.5 0zm8.5 0h-7.5v.63a3.75 3.75 0 1 0 7.5 0z" fill="currentColor" fill-rule="evenodd"/>
            </svg>
        </div>
    </div>
    `

    document.body.insertBefore(header, document.body.firstChild);
    let currentHref = window.location.href;
    if (currentHref.endsWith("/")) {
        console.log("You are on the homepage.");
        let accueilElement = document.getElementById("Accueil");
        if (accueilElement) {
            accueilElement.style.color = "#000000";
            accueilElement.style.borderBottom = "1px solid #000000";
        } else {
            console.error("Element with ID 'Accueil' not found.");
        }
    } 



}