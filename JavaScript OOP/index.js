let sum = 0;
for(i = 1; i <= 10; i++) {
    sum += i;
}
console.log(sum);

console.log('=================');

let myArr = [35, 19, "A", -10, -20, 41, 3, "p", "z"];

let result = myArr.filter(item =>{
    return typeof item === 'number'});
console.log(result);

console.log('=================');

function welcomeMsg(name, gender){
    return gender === 'female' ? `Welcome Mrs.${name}!`: `Welcome Mr.${name}!`;
}
console.log(welcomeMsg('jana', 'female'));
console.log(welcomeMsg('ahmed', 'male'));

console.log('=================');


let arrOne = ["A", "C", "X"];
let arrTwo = ["D", "E", "F"];
let finalArr = [];

for(i=0; i< arrOne.length; i++){
    finalArr.push(arrOne[i]);
    if(arrTwo[i]){
        finalArr.push(arrTwo[i])
    } 
}
console.log(finalArr);

console.log("=================")

//wrong, dont know why aaaaa34asdtfvdahbcj
function positiveOnly (numbers){
    let positive = [];
    for(let i=0;i<numbers.length;i++){
        if(numbers[i] > 0){
            positive.push(numbers[i]);
        }
    }
    return positive;
}
console.log(positiveOnly('-8','-66','5','4','-3'));