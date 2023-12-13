//zoek menu header kerstpagina

var openZoek = document.querySelector("header section:nth-of-type(1) nav button:nth-of-type(1)");

var deZoek = document.querySelector("header section:nth-of-type(2) nav");

var sluitZoek = document.querySelector("header section:nth-of-type(2) nav section:nth-of-type(1) button");

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


//hart animatie

var zoomNaKlik = document.querySelector("main button svg");

zoomNaKlik.onclick = zoomMaken;

function zoomMaken() {
  zoomNaKlik.classList.toggle("zoom");

}

//

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