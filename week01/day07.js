const enemies = [
    { name: "Goblin", hp: 50, damage: 10 },
    { name: "Orc", hp: 120, damage: 25 },
    { name: "Dragon", hp: 300, damage: 50 }
];

function findEnemy(enemies, name){
    for(let i = 0; i < enemies.length; i++){
        if(enemies[i].name === name){
            return enemies[i];
        }
    }
    return null;
}
function takeDamage(enemy, damage){
    if(damage >= enemy.hp){
        enemy.hp = 0;
    }   else if (enemy.hp > damage){
        enemy.hp -= damage;
    }
}
function countAliveEnemies(enemies){
    let count = 0;
    for(let i = 0; i < enemies.length; i++){
        if(enemies[i].hp > 0){
            count++;
        }
    }
    return count;
}
function printEnemies(enemies){
    for(let i = 0; i < enemies.length; i++){
        console.log(`${enemies[i].name} - HP: ${enemies[i].hp} - Damage: ${enemies[i].damage}`);
    }
}
const dragon = findEnemy(enemies, "Dragon");

takeDamage(dragon, 300);

console.log("Dragon HP:", dragon.hp);
console.log("Alive:", countAliveEnemies(enemies));

printEnemies(enemies);