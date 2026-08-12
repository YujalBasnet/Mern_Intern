const btnn = document.querySelector(".btn1");
const noo = document.querySelector(".no");
const yess = document.querySelector(".yes");
const boxx = document.querySelector(".box");


btnn.addEventListener("click", () => {
    
  boxx.style.display = "block";
});

noo.addEventListener("click", () => {
    boxx.style.display = "none";
});

yess.addEventListener("click", () => {
    boxx.style.display = "none";
});