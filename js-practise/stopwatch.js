let sec = 0;
let min = 0;
let hrs = 0;

const St = document.querySelector(".start");
const Di = document.querySelector(".display");

let timer = null;

St.addEventListener("click",  ()=> {

    if (timer !== null) {
        return;
    }

    timer = setInterval(function () {

        sec++;

        if (sec === 60) {
            sec = 0;
            min++;
        }

        if (min === 60) {
            min = 0;
            hrs++;
        }

        Di.innerText =
            `${formatTime(hrs)} : ${formatTime(min)} : ${formatTime(sec)}`;

    }, 1000);

});


function formatTime(time) {

    if (time < 10) {
        return "0" + time;
    }

    return time;
}

Pa.addEventListener("click", function () {

    clearInterval(timer);

    timer = null;

});

Re.addEventListener("click", function () {

    clearInterval(timer);
    timer = null;
    sec = 0;
    min = 0;
    hrs = 0;
    Di.innerText = "00 : 00 : 00";

});