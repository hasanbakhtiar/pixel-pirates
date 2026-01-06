// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

// const getData = new Promise((resolve, reject) => {
//     const response = false;
//     if (response) {
//         resolve("Progress successfull!")
//     } else {
//         reject("Progress rejected!")
//     }
// })

// getData
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

// console.log(getData);



// console.log(fetch());






// fetch('https://fakestoreaapi.com/products')
//     .then(res => console.log(res))
//     .catch(err => console.log(err))


// const normalFunc = function(){
//     console.log("Res One");
// }

// const fetchApi = async function () {
//     const comingData = await fetch('https://fakestoreapi.com/products')
//     const result = await comingData.json();
//     console.log(result);

// }

// fetchApi();
// normalFunc();


// function Car(brand, model, year) {
//     this.ibrand = brand;
//     this.imodel = model;
//     this.iyear = year;

// }

// const myCar = new Car("BMW", "X5", 1990);
// console.log(myCar);



class Car {
    constructor(brand, model, year) {
        this.ibrand = brand;
        this.imodel = model;
        this.iyear = year;
    }

    calculateSpeed(km, hour) {
        return `${this.ibrand + " " + this.imodel} speed: ${km / hour}km/h`
    }
}
const myCar = new Car("BMW", "X5", 1990);
console.log(myCar.calculateSpeed(100, 3));


class Moto extends Car {
    constructor(brand, model, year) {
        super(brand, model, year)
    }

}

const myMoto = new Moto("Toyota", "M900", 1990);
console.log(myMoto.calculateSpeed(100, 3));