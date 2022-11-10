//1
setTimeout(() => {
    const div1 = document.querySelector(`#first`);
    const p1 = document.createElement(`p`);
    p1.innerText = `Hi`;
    div1.append(p1);

}, 1000);


//2
setTimeout(() => {
    const timeoutNesting = document.querySelector(`#timeout-nesting`);
    const p2 = document.createElement(`p`);
    p2.innerText = `One`;
    timeoutNesting.append(p2);

    setTimeout(() => {
        const p3 = document.createElement(`p`);
        p3.innerText = `Two`;
        timeoutNesting.append(p3);

    }, 3000);
}, 2000);

//3a
let time = 1;
const clock = setInterval(() => {
    console.log(time);
    time++;
}, 1000);

//3b
const stop = document.querySelector(`button`);
stop.addEventListener(`click`, () => {
    clearInterval(time);
    clearInterval(clock);

});

//BONUS
//4

const div3 = document.querySelector(`#countdown`);
const p3 = document.createElement(`p`);
let num = 120;
const count2 = setInterval(() => {
    if (num > 0) {
        let minutes = Math.floor(num/60);
        let seconds = num - minutes * 60;
        if(seconds == 0){
            p3.innerText = `${minutes}:${seconds}0`; 
        } else if (seconds < 10){
            p3.innerText = `${minutes}:0${seconds}`;
        } else {
            p3.innerText = `${minutes}:${seconds}`;
        }
        div3.append(p3);
    } else {
        clearInterval(count2);
        p3.innerText = `TIME IS UP!`
        div3.append(p3);
    }
    num--;
}, 1000);


