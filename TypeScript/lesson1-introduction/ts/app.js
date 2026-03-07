var info = 5;
var data = "hello";
var mydata = true;
var product = [
    {
        title: "Asus",
        price: 5,
        newDevice: true
    }, {
        title: "Asus",
        price: 5,
        newDevice: true
    }
];
product.map(function (item, index) {
    console.log(item.title);
});
