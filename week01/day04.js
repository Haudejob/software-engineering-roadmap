// ========================
// DAY 4 — LOOPS
// ========================
// Bài 1 — Number Printer
for(let i=1;i<=10;i++){
    console.log(i);
}
// Bài 2 — Even Numbers
for(let i=1;i<=20;i++){
    if(i % 2 === 0){
        console.log(i);
    }
}
// Bài 3 — Countdown
for(let i=5;i>0;i--){
    console.log(i);
}
console.log("GO!");
// Bài 4 — Skip Number
for(let i=1;i<=10;i++){
    if(i === 5){
        continue;
    }
    console.log(i);
}
// Bài 5 — Stop at 7
for(let i=1;i<=100;i++){
    if(i === 7){
        break;
    }
    console.log(i);
}
// Bài 6 — Health System
let health = 100;

while(health > 0){
    health -= 20;
    console.log(`Health: ${health}`);
}
console.log("Player defeated");

// Bài 7 — FizzBuzz mini 😈

let fizzBuzzNumber = 1;
while (fizzBuzzNumber <= 20){
    if(fizzBuzzNumber % 3 === 0){
        console.log("Fizz");
    }  else if (fizzBuzzNumber % 5 === 0){
        console.log("Buzz");
    }   else {
        console.log(fizzBuzzNumber);
    }
    fizzBuzzNumber++;
}

// 🔥 DAY 4 — FINAL CHALLENGE: BATTLE SIMULATOR
const enemyName = "Dragon";
let enemyHealth = 100;
const playerDamage = 20;
let attackCount = 0;
const playerDamageCrit = 40;
let currentDamage;

while (enemyHealth > 0){
    attackCount++;
    if(attackCount % 3 === 0){
        currentDamage = playerDamageCrit;
    }   else {
        currentDamage = playerDamage;
    }
    enemyHealth -= currentDamage;
    console.log(`Attack ${attackCount} - Damage: ${currentDamage} - ${enemyName} HP : ${enemyHealth}`);
}
console.log(`Dragon defeated in ${attackCount} attacks!`);

for(let wave=1;wave<=5;wave++){
    if(wave === 3){
        continue;
    }
    if(wave === 5){
        console.log("BOSS FOUND!");
        break;
    }
    console.log(`Fighting wave ${wave}`);
}