const navMenu=document.getElementById("nav_menu")
const navToggle=document.getElementById("nav_toggle")
const navClose=document.querySelector(".nav_close")

if(navToggle){
    navToggle.addEventListener("click",()=>{
        navMenu.classList.add("show-menu")
    })
}
if(navClose){
    navClose.addEventListener("click",()=>{
        navMenu.classList.remove("show-menu")
    })
}


const modalViews = document.querySelectorAll(".services_modal"),
      modalBtns=document.querySelectorAll(".services_button")
      modalCloses=document.querySelectorAll(".services_modal-close")

let modal=function(modalclick){
    modalViews[modalclick].classList.add("active-modal")
}

modalBtns.forEach((modalBtns,i)=>{
    modalBtns.addEventListener("click",()=>{
        modal(i)
    })
})

modalCloses.forEach((e)=>{
    e.addEventListener("click",()=>{
        modalViews.forEach((el)=>{
            el.classList.remove("active-modal")
        })
    })
})