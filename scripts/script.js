// JavaScript Document
console.log("hi");

// hulp Sanne tijdens feedbackgesprek 1 dec
// header die zwart wordt op footer

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const intersecting = entry.isIntersecting

        if (intersecting == true) {
            document.documentElement.classList.add("footerBeeld");
        } else {
            document.documentElement.classList.remove("footerBeeld");
        }
    })
}, { threshold: 1 });

const footerStuk = document.querySelector("body > footer");

observer.observe(footerStuk);

//

//hamburger menu header

var openButton = document.querySelector("header > button");

var deNav = document.querySelector("header nav:nth-of-type(1)");

openButton.onclick = openMenu;

function openMenu() {
    deNav.classList.add("open");

}

var sluitButton = document.querySelector("header nav:nth-of-type(1) button");

sluitButton.onclick = sluitMenu;

function sluitMenu() {
    deNav.classList.remove("open");

}

//

//hamburger menu footer

var openTaal = document.querySelector("footer section:nth-of-type(5) > button");

var deTaal = document.querySelector("footer section:nth-of-type(5) nav");

var sluitTaal = document.querySelector("footer section:nth-of-type(5) nav button");


openTaal.onclick = openTaalnav;

function openTaalnav() {
    deTaal.classList.add("open");

}

sluitTaal.onclick = sluitTaalnav;

function sluitTaalnav() {
    deTaal.classList.remove("open");

}

//

//zoek menu header

var openZoek = document.querySelector("header section:nth-of-type(1) nav button:nth-of-type(1)");

var deZoek = document.querySelector("header section:nth-of-type(2) nav");

var sluitZoek = document.querySelector("header section:nth-of-type(2) nav button");

openZoek.onclick = openZoeknav;

function openZoeknav() {
    deZoek.classList.add("open");

}

sluitZoek.onclick = sluitZoeknav;

function sluitZoeknav() {
    deZoek.classList.remove("open");

}

//

//account menu header

var openAccount = document.querySelector("header section:nth-of-type(1) nav button:nth-of-type(2)");

var deAccount = document.querySelector("header section:nth-of-type(3) nav");

var sluitAccount = document.querySelector("header section:nth-of-type(3) nav button");

openAccount.onclick = openAccountnav;

function openAccountnav() {
    deAccount.classList.add("open");

}

sluitAccount.onclick = sluitAccountnav;

function sluitAccountnav() {
    deAccount.classList.remove("open");

}

//

//draai maan header 

// var draaiNaKlik = document.querySelector("header section:nth-of-type(1) nav button:nth-of-type(1)");

// draaiNaKlik.onclick = draaiMaken;

// function draaiMaken() {
//   draaiNaKlik.classList.toggle("draai");

// }

//

//darkmode 

var darkModeCheck = document.querySelector("header label input");

darkModeCheck.addEventListener('change', ikBenVeranderd);

function ikBenVeranderd() {
    if ( darkModeCheck.checked ) {
        document.documentElement.classList.add("darkMode");
        localStorage.setItem("darkMode", JSON.stringify(true));
    }

    else {
        document.documentElement.classList.remove("darkMode");
        localStorage.setItem("darkMode", JSON.stringify(false));
    }
}

if (localStorage.getItem("colorMode")) {
    let darkMode = JSON.parse(localStorage.getItem("darkMode"));
    darkModeCheck.checked = darkMode;

    if (darkMode) {
        document.documentElement.classList.add("darkMode");
    }
}




