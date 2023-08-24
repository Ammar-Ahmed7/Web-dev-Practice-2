
let number1 = 34;
let number2 = 56;
console.log(number1+number2);
console.log("Welcome to javaScript");

// Data Types //
 
//numbers
let str1="This is String";
let str2='This is String2';

//string
let num1= 56;
let num2= 55.7;

//Objects

let marks = {
    Ammar: 100,
    Anas : 99,
    Saad : 50
}

//Booleans
let a = true;
let b = false;
console.log(a,b);

//let und=undefined;
let und
console.log(und);

let n=null;
console.log(n);

/*Types of data types
1.primitive (numbers,String,boolean,undefined,null)
2.reference (Arrays, objects)
*/

//Arrays

let arr= [1,2,3,4,5];
console.log(arr[0]);

let arr2 = [1,2,'abc',3,4,5];
console.log(arr2);

//Assignment operator


let c = 0;
c+=2; // c = c + 2;
// c-=2; // c = c - 2; 
// c*=2; // c = c * 2;
// c/=2; // c = c / 2;

console.log(c);

//Comparison Operator
let x= 56;
let y= 77;
console.log(x>=y);

//functions

function avg(a,b){
  c = (a+b)/c;
  return c;
}

c1=avg(5,5);
console.log(c1);


//loops iteration method 1
let arr3 = [1,2,3,4,5,6,7];
console.log(arr3);
for(let i =0;i<arr3.length;i++){
    console.log(arr3[i]);
}

//loop iteration method 2

arr3.forEach(function(element){
    console.log(element);
})

//Break and continue

for(let i=0;arr3.length;i++){
    if(i==2){
        break;
    }
    console.log(arr3[i]);
}

//push pop shift
let arr5 = ['fan','camera','car','phone']
console.log(arr5.length);
arr5.pop();
arr5.push("asad");
arr5.shift();
arr5.unshift('fan');
console.log(arr5);

console.log(arr5.toString());

//Sort
let arr6 = [3,6,3,12,67,3]
arr6.sort();

console.log(arr6);