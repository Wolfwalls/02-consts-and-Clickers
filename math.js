//the js Math object
console.log(Math.PI);
console.log(Math.floor(5.7)); //5
console.log(Math.ceil(5.7)); //6
console.log(Math.sqrt(25)); //5

//good ones!
console.log(Math.max(4, 5, 6, 7, 8, 3)); //8
console.log(Math.min(4, 5, 6, 7, 8, 3, 9)); //3
console.log(Math.abs(-5)); //5 the absolute value

//random numbers:
let randomnum = Math.random(); //will be between 0 and  < 1
console.log(randomnum);

//get a whole number from the random num between 0 and < 10
randomnum = randomnum * 10; //not a whole number yet
randomnum = Math.floor(randomnum);
console.log(randomnum);

//make the random num between 1 and 10 (inclusive)
console.log(Math.floor(Math.random() * 10) + 1);

//get a random number between two numbers
const maxval = 100;
const minval = 75;
let randbetween = Math.floor(Math.random() * (maxval - minval + 1)) + minval;
console.log(randbetween);
 