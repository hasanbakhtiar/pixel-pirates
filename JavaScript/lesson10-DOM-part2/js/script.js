// document.getElementsByTagName('li')[1].innerHTML = "Hello";
// document.getElementById('my-data').innerHTML = "Hello";
// document.getElementsByClassName('my-text')[1].innerHTML = "Hello";
// document.getElementsByClassName('my-text')[1].innerHTML = "<i>Hello</i>";
// document.getElementsByClassName('my-text')[1].innerText = "<i>Hello</i>";
// document.getElementsByTagName('li')[0].attributes[0].innerHTML = 'my-green';

// document.querySelector('#my-data').innerHTML = "Hello"
// document.querySelectorAll('.my-text')[0].innerHTML = "Hello";
// document.querySelectorAll('.my-text')[1].innerHTML = "Hello";
// document.querySelectorAll('.my-text')[2].innerHTML = "Hello";

// console.log(document.querySelectorAll('.my-text'));

const myText = document.querySelectorAll('.my-text');
const btn = document.querySelector('button');

const actionText = () => {
  for (let index = 0; index < myText.length; index++) {
    myText[index].innerHTML = "Hello"

  }
}

// btn.addEventListener("mouseenter",actionText);
// btn.addEventListener("click",actionText);
// btn.removeEventListener("click",actionText);

// btn.onmouseenter = actionText;
// btn.onclick = ()=>{
//   console.log("test1");

// };
// btn.onclick = ()=>{
//   console.log("test2");

// };



// btn.addEventListener("click",()=>{
//   console.log('test1');

// });

// btn.addEventListener("click",()=>{
//   console.log('test2');

// });

const langData = {
  en: ["Home", "About", "Services", "Blog", "Contact"],
  az: ["Ana Sehife", "Haqqimizda", "Xidmetler", "Meqale", "Elaqe"],
}

const langBtn = document.querySelector('#lang-btn');
const navLink = document.querySelectorAll('.nav-link');



// const dinamicLang = () => {
//   if (langBtn.innerHTML === "AZ") {
//     langBtn.innerHTML = "EN";

//     for (let i in langData.az) {
//       navLink[i].innerHTML = langData.az[i];
//     }


//   } else {
//     langBtn.innerHTML = "AZ";

//     for (let i in langData.en) {
//       navLink[i].innerHTML = langData.en[i];
//     }
//   }
// }



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