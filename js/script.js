//My JavaScript programming file

//Scroll add Nav properties
let nabBar = document.getElementById("nav-bar");

const navActive = ()=>{
  if(window.pageYOffset > 100){
    nabBar.classList.add("active")
  }else{
    nabBar.classList.remove("active")
  }
}
navActive()
window.onscroll = ()=>{navActive()}

//slider header
var swiper = new Swiper('header .swiper-container', {
  autoplay:{
    delay: 6000,
  },
  loop:true,
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
});

//itemBar
let btnItem = document.querySelector(".item"),
 itemBar = document.querySelector(".item-bar"),
 close = document.querySelector(".remove");

 //click get itemBar
 btnItem.onclick = ()=>{
  itemBar.classList.add("active")
 }
 //click remove itemBar
 close.onclick = ()=>{
  itemBar.classList.remove("active")
 }

//slider chef
var swiper = new Swiper('.team .swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 55,
    stretch: 0,
    depth: 80,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});

var swiper = new Swiper('.testimonial .swiper-container', {
  slidesPerView: 1,
  spaceBetween: 100,
  autoplay:{
    delay: 5000,
  },
  loop: true,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


let loading = document.querySelector(".load");
let bodyweb = document.querySelector("body");
bodyweb.style.overflow = "hidden";
window.onload = ()=>{
  bodyweb.style.overflow = "auto"
  loading.remove();
}

// let spiker = document.getElementById("spek");
// let text = document.getElementById("text");

// spiker.onclick = responsiveVoice.speak('agmed esam eldeep');

