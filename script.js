// fetch('https://fakestoreapi.com/products')
//   .then(response => response.json())
//   .then(data => console.log(data))
  

let loginDiv = document.querySelector(".log_in_div");
let userSvg = document.querySelector(".svg");
let userGif = document.querySelector(".gif");
let carGif = document.querySelector(".minicar_gif");
let locationIcon = document.querySelector(".fa-location-dot");
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

