// function name(params) {

// }



// Function Declaration

// info("Isa",2025,2007);
// info("Hasan",2025,1997);
// info("Efsane",2025,2004);


// function info (myName,timeNow,birthYear){
//     console.log(myName+":"+(timeNow-birthYear));

// }


// Function Expression

// const info = function (myName, timeNow, birthYear) {
//     console.log(myName + ":" + (timeNow - birthYear));
// }

// info("Aygun",2025,2005);

// Arrow function ()=>{}

// const info = (myName, timeNow, birthYear) => {
//     console.log(myName + ":" + (timeNow - birthYear));
// }
// info("Subhane", 2025, 2006)


// IIFE(Immediately Invoked Function Expression)

// (function(myName, timeNow, birthYear) {
//     console.log(myName + ":" + (timeNow - birthYear));
// })("Subhane", 2025, 2006)


// function info(a=10,b=5){
//     console.log(a-b);

// }
// info(200,100);



const furnitureOne = [
    { title: "Modern Sofa", price: 599, color: "Gray", rating: 4.5, rate: 120, stock: 30 },
    { title: "Classic Armchair", price: 249, color: "Beige", rating: 4.3, rate: 85, stock: 50 },
    { title: "Wooden Dining Table", price: 899, color: "Brown", rating: 4.8, rate: 200, stock: 15 },
    { title: "Glass Coffee Table", price: 399, color: "Black", rating: 4.1, rate: 60, stock: 25 },
    { title: "Queen Size Bed Frame", price: 749, color: "White", rating: 4.7, rate: 180, stock: 20 },
    { title: "Bookshelf Unit", price: 199, color: "Oak", rating: 4.5, rate: 150, stock: 40 },
    { title: "Leather Recliner", price: 499, color: "Dark Brown", rating: 4.2, rate: 75, stock: 35 },
    { title: "Office Desk", price: 299, color: "Walnut", rating: 4.4, rate: 110, stock: 45 },
    { title: "Bar Stools Set", price: 349, color: "Black", rating: 4.6, rate: 95, stock: 20 },
    { title: "TV Stand", price: 199, color: "Espresso", rating: 4.3, rate: 120, stock: 60 },
    { title: "Outdoor Patio Set", price: 799, color: "Gray", rating: 4.7, rate: 160, stock: 15 },
    { title: "Kids Bunk Bed", price: 699, color: "White", rating: 4.8, rate: 190, stock: 12 },
    { title: "Shoe Cabinet", price: 159, color: "Black", rating: 4.4, rate: 70, stock: 30 },


];


const furnitureTwo = [
    { title: "Corner Desk", price: 499, color: "Walnut", rating: 4.6, rate: 110, stock: 15 },
    { title: "Wooden Bar Cart", price: 399, color: "Mahogany", rating: 4.5, rate: 80, stock: 25 },
    { title: "Sleeper Chair", price: 599, color: "Blue", rating: 4.7, rate: 120, stock: 20 },
    { title: "Foldable Bookshelf", price: 149, color: "Black", rating: 4.4, rate: 60, stock: 40 },
    { title: "Mid-Century Coffee Table", price: 349, color: "Teak", rating: 4.6, rate: 95, stock: 35 },
    { title: "King Size Bed Frame", price: 999, color: "Gray", rating: 4.8, rate: 150, stock: 10 },
    { title: "Reclining Sofa", price: 1399, color: "Brown", rating: 4.9, rate: 300, stock: 5 },
    { title: "Accent Chair", price: 249, color: "Yellow", rating: 4.3, rate: 80, stock: 50 },
    { title: "Round Dining Table", price: 599, color: "Black", rating: 4.5, rate: 100, stock: 20 },
    { title: "Corner Shelf", price: 129, color: "White", rating: 4.2, rate: 55, stock: 40 },
    { title: "Wall-Mounted Desk", price: 199, color: "Brown", rating: 4.3, rate: 70, stock: 30 },
    { title: "Gaming Chair", price: 349, color: "Red", rating: 4.8, rate: 200, stock: 25 },
    { title: "Rattan Patio Chair", price: 229, color: "Natural", rating: 4.7, rate: 85, stock: 15 },
    { title: "Upholstered Bench", price: 349, color: "Blue", rating: 4.5, rate: 90, stock: 40 }
]


const furnitureThree = [
    { title: "Convertible Sofa Bed", price: 649, color: "Blue", rating: 4.5, rate: 140, stock: 25 },
    { title: "Vanity Table", price: 299, color: "White", rating: 4.6, rate: 85, stock: 50 },
    { title: "Dining Chair Set", price: 349, color: "Natural", rating: 4.3, rate: 60, stock: 40 },
    { title: "Chest of Drawers", price: 449, color: "Maple", rating: 4.7, rate: 105, stock: 20 },
    { title: "Sectional Sofa", price: 1299, color: "Charcoal", rating: 4.9, rate: 250, stock: 10 },
    { title: "Lounge Chair", price: 349, color: "Red", rating: 4.2, rate: 80, stock: 35 },
    { title: "Storage Ottoman", price: 129, color: "Gray", rating: 4.5, rate: 90, stock: 50 },
    { title: "Modern Bedside Table", price: 159, color: "Teak", rating: 4.4, rate: 100, stock: 30 },
    { title: "Wardrobe", price: 899, color: "White", rating: 4.8, rate: 180, stock: 15 },
    { title: "Loveseat", price: 499, color: "Dark Gray", rating: 4.3, rate: 95, stock: 25 },
    { title: "Futon", price: 399, color: "Navy", rating: 4.4, rate: 85, stock: 40 },
    { title: "Rocking Chair", price: 249, color: "Oak", rating: 4.5, rate: 70, stock: 20 },
    { title: "Hallway Bench", price: 299, color: "Espresso", rating: 4.6, rate: 75, stock: 35 },
    { title: "Entryway Console Table", price: 259, color: "Black", rating: 4.7, rate: 120, stock: 45 },
    { title: "Storage Bed", price: 1099, color: "White", rating: 4.9, rate: 200, stock: 10 },
    { title: "Adjustable Office Chair", price: 199, color: "Black", rating: 4.3, rate: 60, stock: 50 },
    { title: "Modern Chaise Lounge", price: 599, color: "Cream", rating: 4.7, rate: 130, stock: 20 },
    { title: "Armoire", price: 799, color: "Cherry", rating: 4.8, rate: 150, stock: 15 },
    { title: "Glass Display Cabinet", price: 499, color: "Clear", rating: 4.6, rate: 90, stock: 25 },
    { title: "Adjustable Bar Stool", price: 129, color: "Red", rating: 4.4, rate: 70, stock: 40 },
    { title: "Coat Rack", price: 99, color: "Black", rating: 4.2, rate: 65, stock: 35 },
    { title: "Folding Table", price: 129, color: "White", rating: 4.3, rate: 50, stock: 60 },
]


// const filteredData = furnitureOne.filter((p) => (p.price <=200))
// console.log(filteredData);



// const groupMembers = ["Efsane","Fatima Ha","Nazife","Subhane","Aygun","Isa","Fatima Hu","Emilya"];
// const info = Math.round(Math.random() * groupMembers.length-1);
// console.log(groupMembers[info]);

// console.log(Math);






// const infoOne = (myname) => {
//     return myname;
// }

// const infoTwo = (surname) => {
//     return surname;
// }


// const infoThree = (item) => {
//     return item;
// }

// console.log(infoOne(infoTwo(infoThree("Bakhtiar"))));










// const data = ['a','b','c'];


// data.map((item,index)=>{
//     console.log(item + index);
// });


// data.forEach((item,index)=>{
//     console.log(item + index);
// });







// const filteredFurniture = (comingData, fPirce) => {
//     for (const item of comingData) {
//         if (item.price < fPirce) {
//             console.log(item.title);
//         }

//     }
// }

// filteredFurniture(furnitureOne, 300)
// filteredFurniture(furnitureTwo, 100)





// const filteredData = (dataName,filteringItem,filtervalue)=>{
// if (filteringItem==="color") {
//     dataName.map((item)=>{
//         if (item.color===filtervalue) {
//             console.log(item.title);

//         }
//     })
// }


// }

// filteredData(furnitureOne,"color","red")
// filteredData(furnitureOne,"rea","red")







// for (let index = 0; index < 10; index++) {

//     if (index===5) {
//         continue;
//     }
//     console.log(index);
// }


// import {a} from './main.js';
// import * as data from './main.js';

// console.log(data.a);
// console.log(data.b);





