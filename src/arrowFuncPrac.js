function sum(a, b) {
    return a + b
}

let sum2 = (a, b) => a + b //Everything after the arrow(=>) is assumed to be returned from the function. So it's as if the 'return' aspect of the arrow function is assumed.



let sum3 = (a, b) =>  a + b




function isPostitive(number) {
    return number >= 0
}

let isPostitive2 = (number) => number >= 0


function randomNumber(){
    return Math.random
}

const randomNumber2 = () => Math.random


document.addEventListener('click', function(){
    console.log('Click')
})

document.addEventListener = ('click', () => console.log('Click'))





