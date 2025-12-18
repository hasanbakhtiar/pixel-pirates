const input = document.querySelector('input');
const headText = document.querySelector('h3');
const form = document.querySelector('form');
const listGroup = document.querySelector('.list-group');

input.onkeydown = () => {
    input.style.height = '70px';
    input.style.transition = '.5s';
}
input.onkeyup = () => {
    input.style.height = '40px';
    input.style.transition = '.5s';
}


const submitInput = (e) => {
    e.preventDefault();
    if (input.value === "") {
        alert("Please fill input")
    } else {
        let li = document.createElement('li');
        li.innerHTML = `<span>${input.value}</span><button class="btn btn-danger">X</button>`;
        li.setAttribute('class', 'list-group-item d-flex align-items-center justify-content-between');
        listGroup.append(li);
        li.onclick = () => {
            li.style.textDecoration = 'line-through';
        }
        li.ondblclick = () => {
            li.remove();
        }

        input.value = "";


    }
}

form.onsubmit = submitInput;

// const h2 = document.createElement('h2');
// h2.append("New Hello");
// document.body.append(h2);






















const nav = document.querySelector('nav');
const modeBtn = document.querySelector('#mode-btn');

const dinamicMode = () => {
    if (modeBtn.innerHTML == "Dark") {
        nav.className = "navbar navbar-expand-lg bg-dark navbar-dark";
        modeBtn.innerHTML = "Light";
        localStorage.setItem('mode', 'dark');
    } else {
        nav.className = "navbar navbar-expand-lg bg-light navbar-light";
        modeBtn.innerHTML = "Dark";
        localStorage.setItem('mode', 'light');
    }

}



if (localStorage.getItem('mode') === "dark") {

    nav.className = "navbar navbar-expand-lg bg-dark navbar-dark";
    modeBtn.innerHTML = "Light";
} else {
    nav.className = "navbar navbar-expand-lg bg-light navbar-light";
    modeBtn.innerHTML = "Dark";
}

modeBtn.onclick = dinamicMode;
// localStorage.clear();
// localStorage.setItem('text1','hello1');
// localStorage.setItem('text2','hello2');
// localStorage.setItem('text3','hello3');
// localStorage.removeItem('text1')
// document.querySelector('h1').innerHTML = localStorage.getItem('text2');

