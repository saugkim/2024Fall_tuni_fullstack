/*
Add a listener for the click event on the roll-button button and 
call the rollDice() function once on every click.

Listen to the custom rollDice event triggered on the document whenever the rollDice() function is called. 
Inspect the triggered event and retrieve the current value of the roll. 

Update the appropriate counters and the button value based on the latest roll. 

You can use the template tags inside the HTML to choose the appropriate HTML for the button contents. 

It is recommended to create separate event listeners to handle each counter and the button individually. 

Remember that multiple listeners can be attached to the same event 
and they will all be called when the event is triggered.
*/

const dice = document.getElementById('roll-button');

const counter = document.getElementById('totals').getElementsByTagName('span')[0];

const counter1 = document.getElementById('ones').children[1];
const counter2 = document.getElementById('twos').children[1];
const counter3 = document.getElementById('threes').children[1];
const counter4 = document.getElementById('fours').children[1];
const counter5 = document.getElementById('fives').children[1];
const counter6 = document.getElementById('sixes').children[1];

// console.log(counter.textContent);
// console.log(counter1.textContent);

dice.addEventListener('click', () => {
    rollDice();
});

let totalRolls = 0;
let c1 = 0;
let c2 = 0;
let c3 = 0;
let c4 = 0;
let c5 = 0;
let c6 = 0;

const rollingEvent = new CustomEvent('rollCount', {
    bubbles: true,
    cancelable: false})

document.addEventListener('rollDice', (e) => {
    //totalRolls++;
    //counter.textContent = totalRolls;
    let rolledNumber = e.detail.value;
    console.log(rolledNumber);

    counter.dispatchEvent(rollingEvent);
    dice.dispatchEvent(new CustomEvent('diceUpdate', {detail: rolledNumber}));
    
    if (rolledNumber == 1)
        counter1.dispatchEvent(rollingEvent);
    if (rolledNumber == 2)
        counter2.dispatchEvent(rollingEvent);
    if (rolledNumber == 3)
        counter3.dispatchEvent(rollingEvent);
    if (rolledNumber == 4)
        counter4.dispatchEvent(rollingEvent);
    if (rolledNumber == 5)
        counter5.dispatchEvent(rollingEvent);
    if (rolledNumber == 6)
        counter6.dispatchEvent(rollingEvent);

    //updatePage(rolledNumber) ;
    //counting(rolledNumber);
})

counter.addEventListener('rollCount', (e) => {
    totalRolls++;
    e.target.textContent = totalRolls;
})
counter1.addEventListener('rollCount', (e)=> {
    c1++;
    e.target.innerHTML = c1;
})
counter2.addEventListener('rollCount', (e)=> {
    c2++;
    e.target.innerHTML = c2;
})
counter3.addEventListener('rollCount', (e)=> {
    c3++;
    e.target.innerHTML = c3;
})
counter4.addEventListener('rollCount', (e)=> {
    c4++;
    e.target.innerHTML = c4;
})
counter5.addEventListener('rollCount', (e)=> {
    c5++;
    e.target.innerHTML = c5;
})
counter6.addEventListener('rollCount', (e)=> {
    c6++;
    e.target.innerHTML = c6;
})
dice.addEventListener('diceUpdate', (e) => {
    if (e.detail == 1)
        dice.innerHTML = document.getElementById('template1').innerHTML;
    if (e.detail == 2)
        dice.innerHTML = document.getElementById('template2').innerHTML;
    if (e.detail == 3)
        dice.innerHTML = document.getElementById('template3').innerHTML;
    if (e.detail == 4)
        dice.innerHTML = document.getElementById('template4').innerHTML;
    if (e.detail == 5)
        dice.innerHTML = document.getElementById('template5').innerHTML;
    if (e.detail == 6)
        dice.innerHTML = document.getElementById('template6').innerHTML;
})



const counting = (x) => {
    if (x == 1) { 
//        dice.dispatchEvent(new CustomEvent('diceUpdate', {detail: x}));
        counter1.dispatchEvent(rollingEvent);
    }
    if (x==2) {    
  //      dice.innerHTML = document.getElementById('template2').innerHTML;
        counter2.dispatchEvent(rollingEvent);
    }
    if (x==3) {
    //    dice.innerHTML = document.getElementById('template3').innerHTML;
        counter3.dispatchEvent(rollingEvent);
    }
    if(x==4) {
    //    dice.innerHTML = document.getElementById('template4').innerHTML;
        counter4.dispatchEvent(rollingEvent);
    }
    if (x==5) {
    //    dice.innerHTML = document.getElementById('template5').innerHTML;
        counter5.dispatchEvent(rollingEvent);
    }
    if (x==6) {
    //    dice.innerHTML = document.getElementById('template6').innerHTML;
        counter6.dispatchEvent(rollingEvent);
    }
};
const updatePage = (x) => {

    if (x==1) {
        dice.innerHTML = document.getElementById('template1').innerHTML;
        c1++;
        counter1.textContent = c1;
    }

    if (x==2) {
        dice.innerHTML = document.getElementById('template2').innerHTML;
        c2++;
        counter2.textContent = c2;
    }
        
    if (x==3) {
        dice.innerHTML = document.getElementById('template3').innerHTML;
        c3++;
        counter3.textContent = c3;
    }

    if (x==4) {
        dice.innerHTML = document.getElementById('template4').innerHTML;
        c4++;
        counter4.textContent = c4;
    }

    if (x==5){
        dice.innerHTML = document.getElementById('template5').innerHTML;
        c5++;
        counter5.textContent = c5;
    }
        
    if (x==6) {
        dice.innerHTML = document.getElementById('template6').innerHTML;    
        c6++;
        counter6.textContent = c6;
    }
}