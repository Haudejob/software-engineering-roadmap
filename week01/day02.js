let age = 22;

age = 23;

console.log(age);

const name = "Hau";

console.log(name);

const bignumber = 2422231313213n;

console.log(typeof bignumber);
console.log(typeof age);
console.log(typeof name);
console.log(typeof undefined);
console.log(typeof 100n);
// Temperature converter
const celsius = 100;
const fahrenheit = celsius * 9/5 + 32;

console.log(`${celsius}°C = ${fahrenheit}°F`);

// BMI Calculator
const weight = 50;
const height = 1.63;
const BMI = weight / height ** 2;

console.log(`
    Weight: ${weight} kg
    Height: ${height} m
    BMI: ${BMI.toFixed(2)}
    `);

// Age Calculator
const birthYear = 2004;
const currentYear = 2026;
age = currentYear - birthYear;

console.log(`I am approximately ${age} years old.`);

//Mini Challenge
const userName = "Hau";
let balance = 1000;

balance = balance + 500;

const inputAmount = "200";
// Hau
console.log(userName);
// 1500
console.log(balance);
// string
console.log(typeof inputAmount);
// true
console.log(inputAmount == 200);
// false
console.log(inputAmount === 200);
// true
console.log(Boolean(balance));
// false
console.log(Boolean(0));
// true
console.log(Boolean("false"));
// object 
console.log(typeof null);
// number
console.log(typeof NaN);
// ========================
// DAY 2 FINAL CHALLENGE
// ========================
const playerName = "Hau";
const inputLevel = "25";
const inputGold = "1500";
const isPremium = false;
const guild = "";

const level = Number(inputLevel);
let gold = Number(inputGold);
gold = gold + 500;
const nextLevel = level + 1;
const hasGuild = Boolean(guild);

console.log(playerName === "Hau");

const isCorrectPlayer = (playerName === "Hau");

// hasGuild = false 
console.log(hasGuild);

console.log(`=== PLAYER PROFILE ===
    Name : ${playerName}
    Level: ${level}
    Next Level: ${nextLevel}
    Gold : ${gold}
    Premium: ${isPremium}
    Has Guild: ${hasGuild}
    Correct Player: ${isCorrectPlayer} 
    `);
// Bonus NaN
const invalidLevel = "twenty";
const convertedLevel = Number(invalidLevel);
const isInvalidLevel = Number.isNaN(convertedLevel);
console.log(`Invalid level value: ${convertedLevel}
      Is invalid: ${isInvalidLevel}`);