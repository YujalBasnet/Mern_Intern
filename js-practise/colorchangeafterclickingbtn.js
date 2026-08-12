const btn1 = document.querySelector(".clickBtn1");
const btn2 = document.querySelector(".clickBtn2");
const div = document.querySelector(".container");

btn1.addEventListener("click", () => {
    
  div.style.backgroundColor = "red";
});

btn2.addEventListener("click", () => {
  div.style.backgroundColor = "blue";
});

btn3.addEventListener("click", () => {
  div.style.backgroundColor = "green";
});

btn4.addEventListener("click", () => {
  div.style.backgroundColor = "yellow";
});

btn5.addEventListener("click", () => {
  div.style.backgroundColor = "white";
});