// fetch('https://fakestoreapi.com/products')
//   .then(response => response.json())
//   .then(data => console.log(data))
  
// user and locatin icon animations
let loginDiv = document.querySelector(".log_in_div");
let userSvg = document.querySelector(".svg");
let userGif = document.querySelector(".gif");
let carGif = document.querySelector(".minicar_gif");
let locationIcon = document.querySelector(".fa-location-dot");

// carousel components
let text1 = document.querySelector(".text1");
let text2 = document.querySelector(".text2");
let check = true;

// scroll carousel animation
setInterval(() => {
    if(check){
        text1.classList.add("scroll_down");
        text1.classList.remove("scroll_up");
        text2.classList.add("scroll_up");
        text2.classList.remove("scroll_down");
        check = false;
        // console.log(`if statement: ${check}`)
    }
    else{
        text1.classList.add("scroll_up");
        text1.classList.remove("scroll_down");
        text2.classList.add("scroll_down");
        text2.classList.remove("scroll_up");
        check = true;
        // console.log(`else statement: ${check}`)
    }

}, 3500);


// icon animatoins
loginDiv.addEventListener("mouseenter",()=>{
   userSvg.classList.add("hide");  
   userGif.classList.remove("hide");
})

loginDiv.addEventListener("mouseleave",()=>{
    userSvg.classList.remove("hide");  
    userGif.classList.add("hide");
})

locationIcon.addEventListener("mouseover",()=>{
    carGif.classList.remove("hide");
})

locationIcon.addEventListener("mouseout",()=>{
    carGif.classList.add("hide");
})

//image carousel

let imageCarouselSection = document.querySelector(".image_carousel_sect");

// Store your image paths in an array
const images = [
  "./images/carouselImages/bread.png",
  "./images/carouselImages/coffee.png",
  "./images/carouselImages/babyItems.png"
  // Add more images here easily!
];

let count = 0;

setInterval(() => {
 
  const currentImageIndex = count % images.length;
console.log(currentImageIndex)
  imageCarouselSection.style.backgroundImage = `url('${images[currentImageIndex]}')`;

  count++; 
  if (count === images.length) {
    count = 0;
  }

  // console.log(count);
}, 2300);

