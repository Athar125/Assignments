// 02. Personal Message: Store a person’s name in a variable, and print a message to that person. 
// Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
/*
const userName = "ATHAR";
console.log("Hello", userName, "Would you like to learn some Python today?");

// 03. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, 
// uppercase, and titlecase.
var name1:string="Athar Sab";
console.log(name1.toLowerCase());
console.log(name1.toUpperCase())

// 05. Famous Quote: Find a quote from a famous person you admire. Print the 
// quote and the name of its author. Your output should look something 
// like the following, including the quotation marks:
const quote:string= "No legacy is so rich as honesty" ;
const quote1:string="William Shakespeare";
console.log(quote+":",quote1);

// 05. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable
// called famous_person.Then compose your message and store it in a new variable called message.
// Print your message.
const quote2:string=quote1;
console.log(quote+":",quote2);

// 06. Stripping Names: Store a person’s name, and include 
// some whitespace characters at the beginning and end of the name. 
// Make sure you use each character combination, "\t" and "\n", at least once. 
// Print the name once, so the whitespace around the name is displayed. 
// Then print the name after striping the white spaces.
var stripName:string="Muha \t mmad \n Athar";
console.log(stripName);

// 07 & 08. Number Eight: Write addition, subtraction, multiplication, and division operations
// that each result in the number 8. Be sure to enclose your operations in print 
// statements to see the results.
var a:number=1;
var b:number=2;
var c:number=3;
var d:number=4;
var e:number=12;
var f:number=16;
console.log(d+d);
console.log(e-d);
console.log(b*d);
console.log(f/b);

// 09. Favorite Number: Store your favorite number in a variable. Then, using that 
// variable, create a message that reveals your favorite number. Print that message.
let favNum:number = 10;
let favNum1:string = "MY FAVOURITE NUMBER IS 10"
console.log("favNum", {favNum1})

// 10. Adding Comments: Choose two of the programs you’ve written, and add at least one 
// comment to each. If you don’t have anything specific to write because your 
// programs are too simple at this point, just add your name and the current date 
// at the top of each program file. Then write one sentence describing what the 
let favNum:number = 10;
let favNum1:string = "MY FAVOURITE NUMBER IS 10"
console.log("favNum", {favNum1})

// 11. Names: Store the names of a few of your friends in a array called names. 
// Print each person’s name by accessing each element in the list, one at a time.
let friendsName = ["ATHAR", "AZHAR", "SHADAB", "AFTAB", "SAHIL", "AFTAB ", "AKASH"];
for (let index = 0; index < friendsName.length; index++) 
    console.log(friendsName[index]);

// Greetings: Start with the array you used in Exercise --11, but instead of just printing each person’s name,
//  print a message to them. The text of each message should be the same, but each message should be personalized 
// with the person’s name.
let friendsName1 = ["ATHAR", "AZHAR", "SHADAB", "AFTAB", "SAHIL", "AFTAB ", "AKASH"];
for (let index = 0; index < friendsName1.length; index++) {
    console.log("Hello, " + friendsName1[index] + "! I love you all my buddies.");
}

// 13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make
 // a list that stores several examples. Use your list to print a series of statements about these items, 
 // such as “I would like to own a Honda motorcycle.”
 let ownArray = ["motercyle", "car ", "bicycle", "heavy bike", "bus", "train"];
 let properties = [" is my passion.", " is four seater.", " is gift from brother.", " is very fast.", " is use for public transport.", " is also use for public transport."];
 for (let index = 0; index < ownArray.length; index++) {
     console.log(`I would like to own a ${ownArray[index]} because it${properties[index]}`);
 }

// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that 
// includes at least three people you’d like to invite to dinner. Then use your list to print a message to each
// person, inviting them to dinner.
let guest = ["AZHAR", "AHAD RAZA MIR", "ZARA NOOR"];
for (let index = 0; index < guest.length; index++) {
    console.log(`I would like to invite ${guest[index]} in dinner`);
}

// 15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise --14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list. 
//Missing Person
let misGuest = "ZARA NOOR";
console.log(`Guest who not come ${misGuest}`);
// Replace missing person with new person
guest.splice(2, 1, "Raju");
console.log(guest);
// print secound set of invitiion message
guest.forEach((guest) => {
    console.log(`I would like to invite ${guest} in dinner`);
});

// 16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise --15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
// print of exicting guest
guest.forEach((guest) => {
    console.log(`I would like to inform ${guest} that we found big tabel for dinner`);
}); // • Add one new guest to the beginning of your array.
guest.unshift("AKASH");
console.log(guest);
// Add one new guest to the middle of your array
guest.splice(2, 0, "AFTAB");
console.log(guest);
// Use append() to add one new guest to the end of your list
guest.push("SAHIL");
// Print a new set of invitation messages, one for each person in your list.
guest.forEach((guest) => {
    console.log(`Dear ${guest}, you are invited in dinner.`);
});

// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise --16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

// shrinking list
guest.forEach((guest) => {
    console.log(`Dear ${guest}, I have space for only two guests`);
});
//  Remove guests from your list 
while (guest.length > 2) {
    let removeGuest = guest.pop();
    console.log(`sorry ${removeGuest} you are not invited on dinner`);
}
// Print a message to each of the two people still on your list
guest.forEach((guest) => {
    console.log(`Dear ${guest}, you're still invited`);
});
//  Remove the last two names from your list
guest.pop();
guest.pop();
console.log(`empty list at the end of your program: ${guest}`);


// 18. Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
var places = ["USA", "Makkah ", "Medina", "Itlay", "Turkey"];
// • Print your array in its original order.
console.log(places);
// • Print your array in alphabetical order without modifying the actual list.
let modifyArray = [...places].sort();
console.log("sorted arrray", modifyArray);
// • Show that your array is still in its original order by printing it.
console.log("original array", places);
//  • Print your array in reverse alphabetical order without changing the order of the original list.
console.log("array in reverse alphabetical order without changing the order of the original list", [...places].reverse());
// • Show that your array is still in its original order by printing it again.
console.log("Show that your array is still in its original order by printing it again", places);
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("everse the order of your list again", places.reverse());
console.log("Print the list to show it's back to its original order", places.reverse());
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("stored in alphabetical order", places.sort());
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("stored in reverse alphabetical order", places.reverse());

// 19. Dinner Guests: Working with one of the programs from Exercise --s 14 through 18, print a message indicating the number of people you are inviting to dinner.
console.log("people you are inviting to dinner", guest.length);


// 20. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
let countryList = ["Pakistan", "Afganistan", "Bngladash", "Iran", "Iraq", "Turkey", "Sudia Arabia"];
for (let index = 0; index < countryList.length; index++) {
    console.log(countryList[index]);
}

// 21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
const itemObject = {
    Name: "ATHAR SAB",
    Age: 29,
    isStudent: true,
    Hobbies: ["Learning", "Codding"]
};
console.log(itemObject);

// 23. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. 
// Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
const myArray = [1, 2, 3, 4, 5];
// Intentionally access an element at an invalid index
try {
    const element = myArray[10];
    console.log(`Element at index 10: ${element}`);
}
catch (error) {
    console.error(`An error occurred: ${error}`);
}
// Correct the error by accessing a valid index
const validIndex = 2; // Change this to a valid index within the array length
const validElement = myArray[validIndex];
console.log(`Element at index ${validIndex}: ${validElement}`);
*/
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test
//  and your prediction for the results of each test. Your code should look something like this:
let car = 'BMW';
console.log("Is car == 'BMW'? I predict True.");
console.log(car == 'BMW');
// Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
// 1
let age = 29;
// True
console.log("is age < '20'? I predict True");
console.log(age < 30);
// False
console.log("is age > '20'? I predict False");
console.log(age > 30);
// 2
let aim = "Engineer";
// true
console.log("is aim == 'Engineer'? I predict True");
console.log(aim == "Engineer");
// False
console.log("is aim == 'engineer'? I predict False");
console.log(aim == "engineer");
// 3
let role = "Devolper";
// true
console.log("is role == 'Devolper'? I predict True");
console.log(role == "Devolper");
// false
console.log("is role == 'devolper'? I predict False");
console.log(role == "devolper");
// 4
let isLearning = "Yes";
// true
console.log("is learning == 'Yes'? I predict True");
console.log(isLearning == "Yes");
// false
console.log("is learning == 'yes'? I predict False");
console.log(isLearning == "yes");
// 5
let month = "September";
// true
console.log("is Month == 'September'? I predict True");
console.log(month == "September");
// false
console.log("is Month == 'November'? I predict False");
console.log(month == "November");


