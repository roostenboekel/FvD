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
}, { threshold: 1 })

const footerStuk = document.querySelector("body > footer");

observer.observe(footerStuk);

//

//hamburger menu

var openButton = document.querySelector("header > button");

var deNav = document.querySelector("header nav:nth-of-type(1)");

openButton.onclick = openMenu;

function openMenu() {
    deNav.classList.add("open");

}

var sluitButton = document.querySelector("header nav:nth-of-type(1) button");

sluitButton.onclick = sluitMenu;

function sluitMenu(){
    deNav.classList.remove("open");

}

//