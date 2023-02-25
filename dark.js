const body=document.querySelector("body");
const toggle=document.querySelector("#toggle");
const sunIcon=document.querySelector(".toggle .bxs-sun");
const moonIcon=document.querySelector(".toggle .bxs-moon");

toggle.addEventListener("change",()=>{
    body.classList.toggle("dark");
});