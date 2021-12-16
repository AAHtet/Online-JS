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


// Array

// let fruits = "Apple" // `` , '' -> String Literal , Template literal , String Constructor
// console.log(fruits)

let fruits = ['Apple', 'Orange', 'Avogado']; // Array Literal , Array Constructor (new)


// Array Method

fruits.push("Lemon"); // last index increase
fruits.pop(); // last index delete
fruits.unshift("Lemon") // first index increase
fruits.shift(); // first index delete
console.log(fruits[fruits.length-1]); // fruits မှာ fruits.legth 1 ကိုနှုတ်ရင် ေနာက်ဆုံး index number ရပါတယ်။

/**
 *  မိသားစုတစုသည် စားသောက်ဆိုင်တဆိုင်မှာ bill [1200,1000,1500] ရှင်းကြသည့်အခါ Tip တခုကိုတွက်ပြီး percent ပေးကြသည်။ 500 & 4000 ကြားဖြစ်ပါက 15%, 4000 ထက်ကျော်ပါက 20% ဖြင့်ပေးကြပါသည်။ ေနာက်ဆုံးမှာ Final Total ကိုတွက်ချက်ပေးပါ။
 */






