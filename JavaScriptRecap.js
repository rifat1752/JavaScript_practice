const firstName = " james";
let season = 'rainy';
// console.log(season)
season="winter";
// console.log(season);
let roll = 52;

if(roll>50){
    roll *=2;
}
// console.log(roll);

// ARRAy
const nums = [89,25, 36,10];
// console.log(nums.length);
// console.log(nums[3]);
//added new element to array

nums.push(100);
// console.log(nums);

// for(let i=0; i<nums.length;i++){
// const result = nums[i];
// console.log(result);
// }

//  function

// function sum(num1,num2){
//     const result=num1 + num2;
//     return result
// }
// const result= sum(10,29)
// console.log(result);


const Rana = {
    Name: "Jhon",
    age: 20,
    phone: 20102994
}
//string way
// console.log(Rana["Name"])
const {Name,age,phone}= Rana;

// console.log(Name)

//arrow function

// getNumber = (a)=>{
//    const mul = a*a;
//     if(a%2 ==0){
//    console.log(a + " is even")
//    }
//    else{
//     console.log(a + " is odd")
//    }


// }
// getNumber(4)


// spread operator

// **first copy the Array
console.log("first array",nums)
const newNum = [...nums];
nums.push(200)
console.log("new array",newNum)
console.log("updated array", nums);
 