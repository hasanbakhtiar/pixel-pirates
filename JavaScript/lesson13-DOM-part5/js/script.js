const input = document.querySelector('input');
const headText = document.querySelector('h3');
const form = document.querySelector('form');
const ul = document.querySelector('ul');

const data = [];
const mydata = JSON.parse(localStorage.getItem('data'));


let li = "";
form.onsubmit = (e) => {
    e.preventDefault();
    data.push(input.value);
    localStorage.setItem('data', JSON.stringify(data));
    input.value = ""
    mydata.forEach((item) => {
        li += `<li>${item}</li>`
    })
}



mydata.forEach((item) => {
    li += `<li>${item}</li>`
})
ul.innerHTML = li;






