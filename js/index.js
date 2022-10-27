console.log("I'm ready");

// Iteration 1: Names and Input
let hacker1 = "XXXX";
console.log(`The driver's name is ${hacker1}`);

hacker1="Izaro";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "YYYY";
console.log(`The navigator's name is ${hacker2}`);

hacker2="BlackSeaDahu";
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

/* hacker1 = prompt("Put the driver's name");
hacker2 = prompt ("Put the navigator's name"); */

hacker1="Josep Maria";
hacker2="María de las Angustias";

if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);

} else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);

} else if (hacker1.length === hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters`);
}


// Iteration 3: Loops
/* 3.1 */
/* Primero me salía sin loop:
hacker1="Vasallo";
console.log(hacker1.toUpperCase().split("").join(" ")); */

hacker1=["Vasallo"];
for (let i of hacker1){
    console.log(i.toUpperCase().split("").join(" "));
}

/* 3.2 */
/* Primero me salía sin loop:
hacker2="Federici";
console.log(hacker2.split("").reverse().join("")); */

hacker2=["Federici"];
for (let i of hacker2){
    console.log(i.split("").reverse().join(""));
}

/* 3.3 */
let driver="Izaro";
let navigator="Elisa";

/* Otra prueba:
driver="Alba";
navigator="Zamora"; */

let driverVSnavigator = driver.localeCompare(navigator);

if (driverVSnavigator == -1){
  console.log("The driver's name goes first");
}
else if (driverVSnavigator == 1){
  console.log("Yo, the navigator goes first definitely.");
}
else{
  console.log("What?! You both have the same name?");
}

