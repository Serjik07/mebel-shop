const responsiveMenu = document.querySelector('#responsiveMenu');
const menuBtn = document.querySelector('.menuBtn');
const nav = document.querySelector('#nav');
const close = document.querySelector('.close');
const links = document.querySelectorAll('.aside-main .link');
const vse = document.querySelector('.vse');
// SCROLL EVECT WITH NUV

window.addEventListener('scroll', () => {
    nav.classList.toggle('active', window.scrollY > 60)
})

// OPEN RESP_MENU

menuBtn.addEventListener('click', () => {
    responsiveMenu.classList.toggle('active');
    document.body.style.overflowY = 'hidden';
})


// CLOSE RESP_MENU

function closeMenu() {
    responsiveMenu.classList.remove('active');
    document.body.style.overflowY = 'auto';
}

close.addEventListener('click', closeMenu);
vse.addEventListener('click', closeMenu);

links.forEach((val) => {
    val.addEventListener('click', closeMenu);
})

// main-CARDS


const filterrs = document.querySelectorAll(".link");
const shopMainCont = document.querySelector('.shopMainCont');
const shopInput = document.querySelector("#shop-search");
const shopBtn = document.querySelector("#shopBtn");
const productLink = document.querySelectorAll('.filterProductName [data-filterBtn]');

shopBtn.addEventListener("click", searchFilter);

function searchFilter() {
    productLink.forEach((val) => val.classList.remove('active'));
    let searchText = shopInput.value.toLowerCase();
    if(searchText === '') {
        productLink[0].classList.add('active');
    }
    shopMainCont.innerHTML = "";
    arr.filter((obj) => {
        if (obj.title.toLowerCase().indexOf(searchText) != -1) {
            shopMainCont.innerHTML += `
            <div class="card" aria-label="${obj.filterName}">
                <div class="cardImg">
                    <img src="${obj.img}" alt="Products">
                    <div class="hoverEfect">
                        <div class="icons">
                            <div class="icon"><ion-icon name="add-outline"></ion-icon></div>
                            <div class="icon"><ion-icon name="heart-outline"></ion-icon></div>
                            <div class="icon"><ion-icon name="bag-handle-outline"></ion-icon></div>
                        </div>
                    </div>
                </div>
                <div class="content">
                    <h3 class="productName">${obj.title}</h3>
                    <p class="gin">${obj.gin}</p>
                </div>
            </div>
        `
        }
    });
}

class Cards {
    constructor(filterName, img, title, gin) {
        this.filterName = filterName;
        this.img = img;
        this.title = title;
        this.gin = gin;
    }
}

const arr = [
    new Cards('decoration', 'images/product-1.jpg', 'Animi Dolor Pariatur', '$19.00'),
    new Cards('accessory', 'images/product-2.jpg', 'Out of Stock', '$30.00'),
    new Cards('decoration', 'images/product-3.jpg', 'Art Deco Home', '$19.00'),
    new Cards('accessory', 'images/product-4.jpg', 'Artificial potted plant', '$40.00'),
    new Cards('accessory', 'images/product-5.jpg', 'Dark Green Jug', '$17.10'),
    new Cards('furniture', 'images/product-6.jpg', 'Drinking Glasses', '$21.00'),
    new Cards('accessory', 'images/product-7.jpg', 'Tea Cup', '$69.50'),
    new Cards('accessory', 'images/product-8.jpg', 'High Quality Glass', '$30.10'),
    new Cards('furniture', 'images/product-9.jpg', 'Living Room & Bedroom', '$45.00'),
    new Cards('furniture', 'images/product-10.jpg', 'Simple Chair', '$40.00'),
    new Cards('decoration', 'images/product-11.jpg', 'Smooth Disk', '$46.00'),
    new Cards('furniture', 'images/product-12.jpg', 'Table Black', '$67.00'),
    new Cards('furniture', 'images/product-13.jpg', 'Table Wood Pine', '$50.00'),
    new Cards('accessory', 'images/product-14.jpg', 'Teapot with black tea', '$25.00'),
    new Cards('decoration', 'images/product-15.jpg', 'Unique Decoration', '$15.00'),
    new Cards('decoration', 'images/product-16.jpg', 'Vase Of Flowers', '$77.00'),
    new Cards('decoration', 'images/product-17.jpg', 'Wood Eggs', '$19.00'),
    new Cards('decoration', 'images/product-18.jpg', 'Wooden Box', '$27.00'),
    new Cards('accessory', 'images/product-19.jpg', 'Wooden Cups', '$29.00'),
    new Cards('accessory', 'images/product-20.jpg', 'Soft Chair', '$55.00')
];

function drow(arr) {
    shopMainCont.innerHTML = "";
    arr.forEach((val) => {
        // let label = val.filterName;
        shopMainCont.innerHTML += `
            <div class="card" aria-label="${val.filterName}">
                <div class="cardImg">
                    <img src="${val.img}" alt="Products">
                    <div class="hoverEfect">
                        <div class="icons">
                            <div class="icon"><ion-icon name="add-outline"></ion-icon></div>
                            <div class="icon"><ion-icon name="heart-outline"></ion-icon></div>
                            <div class="icon"><ion-icon name="bag-handle-outline"></ion-icon></div>
                        </div>
                    </div>
                </div>
                <div class="content">
                    <h3 class="productName">${val.title}</h3>
                    <p class="gin">${val.gin}</p>
                </div>
            </div>
        `
    })
}

drow(arr)

productLink.forEach((val) => {
    val.addEventListener('click', () => {
        shopInput.value = '';
        productLink.forEach((val) => val.classList.remove('active'));
        val.classList.add('active');
        if (val.getAttribute('data-filterBtn') === "all") {
            drow(arr);
        } else {
            drow(filterFunc(val.getAttribute('data-filterBtn')))
        }
    });
})

function filterFunc(ariaL) {
    return arr.filter((val) => {
        let filN = val.filterName;
        if (filN === ariaL) {
            return val;
        }
    });
}



                                    // Add

const inputs = document.querySelectorAll(".inputs input, .inputs select");
const addBtn = document.querySelector(".inputs button");

addBtn.addEventListener("click",addCard)

function addCard() {
    let newName;
    let newType;
    let newImgUrl;
    let newPrice;
    inputs.forEach((input) => {
        if(input.name === "name") {
            newName = input;
        } else if(input.name === "type") {
            newType = input;
        } else if(input.name === "price") {
            newPrice = input;
        } else if(input.name === "imgurl") {
            newImgUrl = input;
        }
    });

    if(!(newName.value === "" || newImgUrl.value === "" || newName.value === "" || newPrice.value  === "")) {
        arr.unshift(new Cards(newType.value,newImgUrl.value,newName.value,newPrice.value));
        drow(arr);
        newName.value = "";
        newPrice.value = "";
        newType.value = "accessory";
        newImgUrl.value = "";  
    } else {
        alert("All fields must be filled (:");
    }
}


// Top Btn

const topBox = document.getElementById('topBox');

function toping() {
    if(window.scrollY > 600) {
        topBox.classList.add('active');
    } else {
        topBox.classList.remove('active');
    }
}

window.addEventListener('scroll', toping)