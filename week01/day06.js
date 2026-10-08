// Thêm/xóa phần tử: push() và pop()
// shift() và unshift()
// Bài 1 — Print Inventory
const inventory = ["Sword", "Shield", "Potion", "Bow"];

for(let i = 0; i < inventory.length; i++){
    console.log(`Item ${i+1}: ${inventory[i]}`);
}
// Bài 2 — Count Strong Enemies
function countStrongEnemies(healthList) {
    let count = 0;
    for(let i = 0; i < healthList.length; i++){
        if(healthList[i] >= 50){
            count++;
        }
    }
    return count;
}
console.log(countStrongEnemies([20, 80, 50, 10, 100]));
// 3

// Bài 3 — Find First Boss
function findFirstBoss(enemies) {
    for(let i = 0; i < enemies.length; i++){
        if(enemies[i] === "Boss"){
            return i;
        }
    }
    return -1;
}
console.log(findFirstBoss(["Goblin", "Orc", "Boss", "Boss"]));
// 2

console.log(findFirstBoss(["Goblin", "Orc"]));
// -1

// Bài 4 — Gold Collector 😈
function collectGold(goldList) {
    let total = 0;
    for(let i = 0; i < goldList.length; i++){
        total += goldList[i];
    }
    return total;
}
const goldDrops = [100, 50, 200, 30, 120];

console.log(collectGold(goldDrops));
// 500

// 🔥 DAY 6 — FINAL CHALLENGE: INVENTORY SYSTEM
const inventoryFC = ["Sword", "Shield", "Potion"];

function addItem(items, newItem) {
    items.push(newItem);
    return items.length;
}

function removeLastItem(items) {
    return items.pop();
}

function findItem(items, target) {
    for(let i = 0; i < items.length; i++){
        if(items[i] === target){
            return i;
        }
    }
    return -1;
}

function printInventory(items) {
    for(let i = 0; i < items.length; i++){
        console.log(`Item ${i+1}: ${items[i]}`);
    }
}

console.log("Added. Total:", addItem(inventoryFC, "Bow"));
console.log("Found at:", findItem(inventoryFC, "Potion"));
console.log("Removed:", removeLastItem(inventoryFC));

printInventory(inventoryFC);
printInventory(["Axe", "Bow"]);