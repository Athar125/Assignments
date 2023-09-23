export {};
/*

// Write a program that uses a while loop to print the first 25 integers.

console.log("First 25 Integers are:");
 let initialValue:number = 1;
 while (initialValue <= 25) {
    console.log(initialValue);
    initialValue += 1;
 }

//  A Program that uses a while-loop to print first 10 even numbers. */
/*
console.log("First 10 Even Numbers are: ");
let initialVal:number = 0;
while (initialVal < 20) {
    if (initialVal % 2 === 0) {
        console.log(initialVal);
    }
    initialVal += 1;
}

// Write a program having a array of numbers.
// If the number is negative it should remove the negative number from the array.


let numArray:number[] = [1, 2, -3, 4, -5, 6,]
let i = 0;
while(i < numArray.length){
    if(numArray[i] < 1){
        numArray.splice(i,1);
    }
    i++;
}
console.log('Array without Negative Numbers is: ',numArray);

//create a function that takes an array of numbers as parameter.
// Use while loop to calculate and return sum of all the number in that array.


function sumFromArrayValues(num:number[]) {
    let a = 0;
    let arraySum = 0
    while(a < num.length){
        arraySum += num[a]
        a++;
    }
    return arraySum;
}
console.log('Sum of the numbers in given Array is: ',sumFromArrayValues([1,2,-3,4,-5,6,7,8,-9]));

// A Program that takes a list of temperatures in celsius as input from the user,
// and convert each temperature into Fahrenheit and store them in another array.
// use while loop to perform the conversion.


function arrayTempConverterCtoF(cTempArray:number[]) {
    let a = 0;
    let fTempArray: number[] = [];
    while(a < cTempArray.length){
        fTempArray[a] = (cTempArray[a] * 9/5) + 32;
        a++;
    }
    return fTempArray;
}

console.log('Array of temperatures in Fahrenheit is: ',arrayTempConverterCtoF([30, 40, 10, -3, 55]));

// A function that takes a positive interger as parameter
// and uses a while loop to calculate and return the factorial of that number. */
/*
function factorialOfNumber(num:number): number {
    if(num > 0){
        var factorial:number = 1;
        while(num >= 1){
            factorial = factorial * num;
            num -= 1;
        }
        return factorial;
    }
    else{
        return 1
    }
}

console.log('Factorial of the given Number is: ',factorialOfNumber(5));

//Create a function that takes an array, an index, and a value as parameters. Inside the function,
// use the splice method to insert the value at the specified index in the array.
// Return the modified array.


function splicer(anArray:string[], anIndex:number, aValue:string) {
    anArray.splice(anIndex,0,aValue);
    return anArray
}

console.log(splicer(['ATHAR', 'a', 'program'], 1, 'writes'),);


//  Implement a simple shopping cart program using an array. Create functions to add items, remove items,
// and update quantities using the splice method. Print the cart's contents after each operation

var items: string[] = ["Shirt", "Pent", "Coat", "Tie", "Shoes"];
function toAdd(items: string[], newItem: string) {
    items.splice(0, 0, newItem);
    console.log(items);
}
toAdd(items, "all2");
var items: string[] = ["Shirt", "Pent", "Coat", "Tie", "Shoes"];

function toRemove(index: number ) {
    items.splice(index, 1, );
    console.log(items);
}
toRemove(2 );
*/ 
