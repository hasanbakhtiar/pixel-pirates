const info: number = 5;
let data: string = "hello";
let mydata: boolean = true;
// const product: Array<number | string> = ["Apple", "Banana", 5];
// const product: string[] = ["Apple", "Banana", "Mongo"];



type productType = {
    title: string,
    price: number,
    newDevice: boolean
}

const product: productType[] = [
    {
        title: "Asus",
        price: 5,
        newDevice: true
    }, {
        title: "Asus",
        price: 5,
        newDevice: true
    }
]

product.map((item:productType,index:number)=>{
        console.log(item.title);
        
})




