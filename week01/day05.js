// ========================
// DAY 5 — FUNCTIONS
// ========================
// Bài 1 — greetPlayer
function greetPlayer(name){
    console.log(`Welcome ${name}!`);
}

greetPlayer("Hau");
greetPlayer("An");

// Bài 2 — add
function add(a, b){
    return a + b;
}
const result = add(10, 20);

console.log(result);
console.log(result * 2);

//Bài 3 — checkEven
function checkEven(number){
    if(number % 2 === 0){
        return true;
    } else {
        return false;
    }
}

console.log(checkEven(10));
console.log(checkEven(7));

// Bài 4 — calculateRank
function calculateRank(level){
    if(level >= 50){
        return "Master";
    }   else if(level >= 30){
        return "Diamond";
    }   else if(level >= 20){
        return "Gold";
    }   else if(level >= 10){
        return "Silver";
    }   else {
        return "Bronze";
    }
}
console.log(calculateRank(55));
console.log(calculateRank(35));
console.log(calculateRank(25));
console.log(calculateRank(15));
console.log(calculateRank(5));

// Bài 5 — calculateDamage 😈
function calculateDamage(baseDamage, isCritical){
    if(isCritical){
        return baseDamage * 2;
    }
    return baseDamage;
}
const normalDamage = calculateDamage(20, false);
const criticalDamage = calculateDamage(20, true);

console.log(normalDamage);
console.log(criticalDamage);

// Bài 6 — sumTo

function sumTo(max){
    let count = 0;
    for(let i = 1;i <= max;i++){
        count += i;
    }
    return count;
}
console.log(sumTo(6));

// Bài 7 — findFirstMultiple
function findFirstMultiple(max, divisor){
    for(let i = 1; i<= max; i++){
        if(i % divisor === 0){
            return i;
        }
    }
    return "Not found";
}

console.log(findFirstMultiple(20, 6));
console.log(findFirstMultiple(5, 6));

// FINAL CHALLENGE — PLAYER BATTLE SYSTEM
function calculateDamage(baseDamage, attackNumber){
    if(attackNumber % 3 === 0){
        return baseDamage * 2;
    }
    return baseDamage;
}
function attackEnemy(enemyHealth, damage){
    return enemyHealth - damage;
}
function battle(enemyHealth, baseDamage){
    let attackNumber = 0;
    while(enemyHealth > 0){
        attackNumber++;
        const damage = calculateDamage(baseDamage, attackNumber);
        enemyHealth = attackEnemy(enemyHealth, damage);
        console.log(`Attack ${attackNumber} - Damage: ${damage} - HP: ${enemyHealth}`);
    }
    console.log(`Enemy defeated in ${attackNumber}!`);
}
battle(100, 20);