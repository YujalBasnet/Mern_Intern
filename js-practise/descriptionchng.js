const H = document.querySelector(".T");
const C = document.querySelector(".S");
const J = document.querySelector(".A");

const one = document.querySelector(".text1");
const two = document.querySelector(".text2");
const three = document.querySelector(".text3");

H.addEventListener("click", () => {
    
  one.style.display = "block";
  two.style.display = "none";
  three.style.display = "none";
});

C.addEventListener("click", () => {
  one.style.display = "none";
  two.style.display = "block";
  three.style.display = "none";
});

J.addEventListener("click", () => {
  one.style.display = "none";
  two.style.display = "none";
  three.style.display = "block";
});