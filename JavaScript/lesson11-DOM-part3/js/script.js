import { langData } from "./data.js";

const langBtn = document.querySelector('#lang-btn');
const navLink = document.querySelectorAll('.nav-link');

const dinamicLang = () => {
    if (langBtn.innerHTML === "AZ") {
        langBtn.innerHTML = "EN";

        langData.az.map((item, index) => (
            navLink[index].innerHTML = item
        ))


    } else {
        langBtn.innerHTML = "AZ";

        langData.en.map((item, index) => (
            navLink[index].innerHTML = item
        ))

    }
}

langBtn.onclick = dinamicLang;

// ============================Lang End=======================

const modeBtn = document.querySelector('#mode-btn');
const nav = document.querySelector('nav');

const dinamicMode = () => {
    if (modeBtn.className == "btn btn-dark") {
        modeBtn.className = "btn btn-light";
        modeBtn.innerHTML = "🌞"
        nav.className = "navbar navbar-expand-lg bg-dark navbar-dark"
    } else {
        modeBtn.className = "btn btn-dark";
        modeBtn.innerHTML = "🌙"
        nav.className = "navbar navbar-expand-lg bg-light navbar-light"
    }

}
modeBtn.onclick = dinamicMode;

// ============================Mode End=======================

const toggleBtn = document.querySelector('#toggle-btn');
const leftBar = document.querySelector('#left-bar');

const toggleAction = () => {
    leftBar.classList.toggle('hide');
    // document.querySelector('.navbar-brand').style.color = "red";
    toggleBtn.style.backgroundColor = "green";
}

toggleBtn.onclick = toggleAction;

// ============================Toggle End=======================



document.querySelector('#next').onclick = () => {
    document.querySelector('#image').attributes[1].value = "https://www.socwall.com/images/wallpapers/73652-1920x1080.jpg"
}


document.querySelector('#prev').onclick = () => {
    document.querySelector('#image').attributes[1].value = "https://wallpapercave.com/wp/wp2309567.jpg"
}




// ============================Carousel End=======================




