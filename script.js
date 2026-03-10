/* HERO IMAGE SLIDER */

const heroImages = [
"https://via.placeholder.com/1600x900",
"https://via.placeholder.com/1600x900",
"https://via.placeholder.com/1600x900"
];

let current = 0;

function changeHero(){

document.getElementById("hero").style.backgroundImage =
`linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(${heroImages[current]})`;

current++;

if(current === heroImages.length){
current = 0;
}

}

setInterval(changeHero,4000);
changeHero();



/* PRODUCT FILTER */

function filterProducts(category){

let products = document.querySelectorAll(".product");

products.forEach(p => {

if(category === "all"){
p.style.display="block";
}

else if(p.classList.contains(category)){
p.style.display="block";
}

else{
p.style.display="none";
}

});

}



/* CART SYSTEM */

let cartCount = 0;

function addCart(){

cartCount++;

document.getElementById("cart").innerText = cartCount;

}
