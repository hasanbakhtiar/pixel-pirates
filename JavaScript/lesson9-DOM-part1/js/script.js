// console.log(document);


const headText = document.getElementsByTagName("h1")[0];


const btn = document.getElementsByTagName('button')[0];


const changeData = () => {
  if (headText.innerHTML === "England") {
      headText.innerHTML = "London";
      btn.innerHTML = "show country"
  }else{
      headText.innerHTML = "England";
      btn.innerHTML = "show capital"
  }
}

btn.onclick= changeData;
