// while 
// let info = 5;
// while (info>0) {
//     console.log(info);
//     info--;
// }


// let info = 0;
// do{
//     console.log(info); //result
//     info++;//action

// }while(info>5);//condition


// for (let i = 0; i < 5; i++) {
//     console.log(i);

// }


const products = [
    {
        title: "Product One",
        price: 1000,
        color: ['blue'],
        category:"Premium"
    },
    {
        title: "Product Two",
        price: 2000,
        color: ['blue', "orange", "white"],
        category:"Office"
    },
    {
        title: "Product Three",
        price: 3000,
        color: ["black", "white"],
        category:"Premium"
    },
    {
        title: "Product Four",
        price: 4000,
        color: ["black", 'pink'],
        category:"Office"


    },
    {
        title: "Product Five",
        price: 5000,
        color: ['blue', "black", "white"],
        category:"Slim"

    }
]


const selectedCategory = prompt();
for (let i of products) {
    if (selectedCategory === i.category) {
        console.log(i.title);
        
    }else{
        console.log("No product");
        
    }
}


// for (let i = 0; i < products.length; i++) {

//     for (let c = 0; c < products[i].color.length; c++) {

//         if (products[i].color[c] == "blue") {
//             console.log(products[i].title);

//         }

//     }

// }

// for (let index = 0; index < products.length; index++) {
//     console.log(index);

// }

// for (let i in products) {
//     console.log(products[i].title);
// }

// for(let i of products){
//     console.log(i.title);
// }



