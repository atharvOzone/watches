const hourHand = document.querySelector(".h");
const minHand = document.querySelector(".m");
const secondsHand = document.querySelector(".s");

date();

function date(){
    var temp1 = new Date();

    //for hours
    const hour = temp1.getHours()%12;
    hourHand.style.transform = `rotate(${(30*hour)}deg)`;

    //for minutes
    const mins = temp1.getMinutes();
    minHand.style.transform = `rotate(${(mins*6)}deg)`;



    // for seconds
    const s = temp1.getSeconds();
    secondsHand.style.transform = `rotateZ(${s*6}deg)`;
    // console.log(temp2);
    // console.log(s);
}

setInterval(date,1000);