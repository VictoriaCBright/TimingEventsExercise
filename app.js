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

// Come back to this 
