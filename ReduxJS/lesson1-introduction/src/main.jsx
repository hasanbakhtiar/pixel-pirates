import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { productAddAction } from './tools/actions/productAction';
import configureStore from './tools/store/configureStore';

const store = configureStore();
// store.subscribe(() => {
//   console.log(store.getState());
// })

store.dispatch(productAddAction({ id: 1, title: "Asus", price: 3000 }));
store.dispatch(productAddAction({ id: 2, title: "Lenovo", price: 5000 }));
store.dispatch(productAddAction({ id: 3, title: "Dell", price: 7000 }));

// function Person(first, last, age, eyecolor) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eyecolor;
// }

// const myFather = new Person("John", "Doe", 50, "blue");
// const myMother = new Person("Sally", "Rally", 48, "green");
// Person.prototype.height = "1.7 sm";
// console.log(myFather.height);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>Hello React </h1>
  </StrictMode>,
)
