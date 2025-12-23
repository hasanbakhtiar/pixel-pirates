import { laptops } from "./data.js";

const row = document.querySelector('.row');

let laptopItem = ""

laptops.map(item => (
    laptopItem += `   <div class="col-12 col-sm-6 col-md-3" data-aos="flip-up">
                <div class="card" >
                    <div class="card-body">
                        <h5 class="card-title">${item.model}</h5>
                        <p class="card-text">$${item.price}</p>
                        <p class="card-text">${item.cpu}</p>
                        <p class="card-text">${item.brand}</p>
                        <p class="card-text">${item.storage}</p>
                        <p class="card-text">${item.screen}</p>
                        <p class="card-text">${item.ram}</p>
                        <p class="card-text">${item.storage}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>`
))

row.innerHTML = laptopItem;


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});