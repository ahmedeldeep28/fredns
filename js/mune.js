// mune navgetion 
let showItem = document.querySelector(".all"),
itemShow = document.querySelector(".menu-item"),
items = document.querySelectorAll(".menu-item li");
let activeItem =  Array.from(items);

console.log(activeItem);

activeItem.forEach((block) =>{
  block.addEventListener("click",function(){
    block.classList.toggle("active")
  })
})


showItem.onclick = () =>{
  itemShow.classList.toggle("active")
}