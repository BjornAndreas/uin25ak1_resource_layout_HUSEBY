const resources = [
    {
        category: "HTML",
        text: "HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/html/"
            },
            {
                title: "HTML Living standard",
                url: "https://html.spec.whatwg.org/multipage/"
            },
            {
                title: "HTML.com Tutorials",
                url: "https://html.com/"
            },
        ]
    },
    {
        category: "CSS",
        text: "CSS står for Cascading StyleSheets, og brukes for å sette stilregler på HTML-elementer.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/css/"
            },
            {
                title: "W3C HTML & CSS Standards",
                url: "https://www.w3.org/standards/webdesign/htmlcss.html"
            },
            {
                title: "W3C CSS Validator",
                url: "https://jigsaw.w3.org/css-validator/"
            },
            {
                title: "CSS Tricks",
                url: "https://css-tricks.com/"
            },
        ]
    },
    {
        category: "JavaScript",
        text: "JavaScript er et scriptspråk basert på EcmaScript. JavaScript kjører direkte i nettleseren, og brukes ofte til å manipulere HTML og CSS i webgrensnesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/js/"
            },
            {
                title: "MDN Web Docs",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "React",
        text: "React er et rammeverk bygget i JavaScript. React bruker komponenter og states for å lage en levende frontend.",
        sources: [
            {
                title: "React documentation",
                url: "https://reactjs.org/docs/getting-started.html"
            },
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/REACT/DEFAULT.ASP"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "Sanity and headless CMS",
        text: "Sanity er et headless CMS som står for innholdsadministrasjon. Innhold hentes inn i applikasjoner via GROQ-spørringer.",
        sources: [
            {
                title: "Sanity documentation",
                url: "https://www.sanity.io/docs"
            },
            {
                title: "OnCrawl: a beginners guide to headless CMS",
                url: "https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/"
            },
            {
                title: "Section.io: Getting started with Sanity CMS",
                url: "https://www.section.io/engineering-education/getting-started-with-sanity-cms/"
            },
        ]
    },
]

//henter nav-tabs fra index filen slikt at vi kan starte med og få innholdet dynamisk
const navfaner = document.getElementById("nav-tabs")

//henter content fra index filen slikt at vi kan starte med og få innholdet dynamisk
const content = document.getElementById("content")

//her så har vi en tom streng slikt at html innholdet blir dynamisk
let resourcesHTML = "";

//her så henter elementene fra resource arrayet og index til hvert element
resources.map((resource, index) => {
    //her så henter vi ut første elementet i resource arrayen våres og setter klassen til active slikt at tabben blir markert som aktiv
    resourcesHTML += `<li class="${index === 0 ? "active" : ""}">${resource.category}</li>`;
})

//her så setter vi innholdet i navfaner til resourceHTML
navfaner.innerHTML = resourcesHTML;

// https://chatgpt.com/share/679a5c60-7d2c-8009-8c6f-beedf2dbecbe
// Her så har jeg spurt chatgpt om hvordan man får fjernet "," som vises etter vær av linkene når jeg har brukt .map (jeg har også brukt .join lengre nede i htmlResource.sources.map)
//om jeg har forstått riktig så gjør .join slikt at den henter ut linkene i sources og at den da fjerner "," som blir vist når jeg ikke har .join
//her så har vi en funksjon som oppdaterer innholdet i tabbene ettersom hvilken tab som er valgt
function updateFaner(index) {
    const resource = resources[index]
    content.innerHTML = `<h2>${resource.category}</h2>
    <p>${resource.text}</p>
    <ul>
        ${resource.sources.map(source => `<li><a href="${source.url}" target="_blank">${source.title}</a></li>`).join("")}
    </ul>`
};

//her så henter vi ut dataen fra html i arrayet også vises dem som startinnholdet når man åpner siden / refresher
const htmlResource = resources.filter(resource => resource.category === "HTML")[0];
content.innerHTML = `<h2>${htmlResource.category}</h2>
    <p>${htmlResource.text}</p>
    <ul>
        ${htmlResource.sources.map(source => `<li><a href="${source.url}" target="_blank">${source.title}</a></li>`).join("")}
    </ul>`;

//henter alle li elementene i navfaner 
const tabs = navfaner.getElementsByTagName('li'); 

//her så legger vi til en eventlistener slikt at når vi klikker på en tab så åpnes den vi trykker på
for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", () => {

        //Fjerner klassen active fra alle tabbene
        for (let tab of tabs) {
            tab.classList.remove("active");
        }

        //Legger til klassen active på den valgte tabben
        tabs[i].classList.add("active");

        //oppdaterer innholdet basert på hvilken tab vi har trykket på
        updateFaner(i);
    });
}

