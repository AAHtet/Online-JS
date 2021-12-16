'strict mode';

// Callback Function


let twice = (num,fun) => fun(num) * 2;


console.log(twice(5,function(x){
    return x + 1;
}));

let fruitPieces = fruit => fruit * 4;


const fruitsProcessor = (apples, oranges) => 
{
    let applesPieces = fruitPieces(apples);
    let orangesPieces = fruitPieces(oranges);
    let juice = `Juices are ${applesPieces} apples and ${orangesPieces} oranges`;
    return juice;
}

console.log(fruitsProcessor(5,2));

// Arrow Function
/**
 * Arrow Function - function remove - parathesis နောက် arrow key ထည့် statement တကြောင်းတည်းဆို {} return ဖြုတ်ရေး auto return ပြန်။
 * @param {*} _ 
 * @returns 
 */

let add = _ => "Hello"; // parameter empty () or _ , parameter (1 => Remove())

console.log(add());

/**
 *  Mg Mg - 98,108,50,
 *  Aung Aung - 108,20,30
 *  2 ဆ နိုင်မှာ
 */


// Average Score Calculation

const avgScoreCal = (a,b,c) => (a+b+c) / 3;

let mgmgScore = avgScoreCal(98,108,50);
let aungaungScore = avgScoreCal(108,20,30);

const checkWinner = (mgmgMark,aungaungMark) =>
{
    if(mgmgMark >= 2 * aungaungMark )
    {
        console.log(`Mg Mg of scores are winner 🏆 (${mgmgMark} Vs ${aungaungMark})`);
    }else if(aungaungMark >= 2 * mgmgMark){
        console.log(`Aung Aung of scores are winner 🏆 (${aungaungMark} Vs ${mgmgMark})`);
    }else{
        console.log("Drop")
    }
}

checkWinner(mgmgScore, aungaungScore);

/**
 * Test2 - John - 100,120,103
 *         Hary - 104,200,210
 */




