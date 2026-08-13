const closBtn = document.querySelector(".close");
const barr = document.querySelector(".bar");

closBtn.addEventListener("click", () => {
    
  barr.style.transform = "translateX(-80%)";
  closeBtn.style.transform = "translateX(-90%)";
});

