// ========================
// DAY 3 — CONDITIONS
// ========================
// Age Checker 
/*
const age = 17;

age >= 18
→ "You are an adult"

ngược lại
→ "You are a minor"
*/
const age = 17;

if(age >= 18){
    console.log("You are an adult");
}   else {
    console.log("You are a minor");
}
// Grade Checker
/*
const score = 85;

score >= 90 → "Excellent"
score >= 80 → "Good"
score >= 70 → "Average"
score >= 50 → "Pass"
còn lại     → "Fail"
*/

const score = 85;

if(score >= 90){
    console.log("Excellent");
}   else if(score >= 80) {
        console.log("Good");
}   else if(score >= 70){
        console.log("Average");
}   else if(score >= 50){
        console.log("Pass");
}   else {
        console.log("Fail");
}
// Login System
/*Cho:
const userName = "Hau";
const password = "123456";

Chỉ login thành công khi cả hai đều chính xác:
username phải là "Hau"
VÀ
password phải là "123456"

Output:
Login successful

hoặc:
Invalid username or password
*/

const userName = "Hau";
const password = "123456";

if(userName === "Hau" && password === "123456"){
    console.log("Login successful");
} else {
    console.log("Invalid username or password");
}
/*
Access Control 😈
Cho:
const age = 22;
const isPremium = true;
const isBanned = false;

Quy tắc:
User được access khi đủ 18 tuổi, đồng thời phải là Premium, đồng thời không bị banned.

Tự viết condition.
Với dữ liệu trên:
Access granted

Thử suy nghĩ nó tương đương:
condition 1
AND
condition 2
AND
condition 3
*/

const userAge = 22;
const isPremium = true;
const isBanned = false;

if(userAge >= 18 && isPremium && isBanned === false){
    console.log("Access granted");
}
/*
Admin OR Premium 🔥
Cho:
const isAdmin = false;
const isPremium = true;
const isBanned = false;

Quy tắc:
User phải là Admin HOẶC Premium, nhưng đồng thời không được bị banned.

Output với dữ liệu trên:
Welcome

Đây chính là dạng:
(A OR B) AND C

nhưng bạn phải tự chuyển nó thành JavaScript.
*/
const isAdmin = false;
const isPremiumB5 = true;
const isBannedB5 = false;

if((isAdmin || isPremiumB5) && isBannedB5 === false){
    console.log("Welcome");
}

// FINAL CHALLENGE

const playerAge = 20;
const playerLevel = 25;
const playerGold = 1500;

const playerIsPremium = true;
const playerIsBanned = false;
const playerIsAdmin = false;

if(playerAge >= 18 && !playerIsBanned){
    console.log("Account access granted");
}   else {
    console.log("Account access denied");
}

if(playerLevel >= 50){
    console.log("Rank: Master");
}   else if(playerLevel >= 30){
    console.log("Rank: Diamond");
}   else if(playerLevel >= 20){
    console.log("Rank: Gold");
}   else if(playerLevel >= 10){
    console.log("Rank: Silver");
}   else {
    console.log("Rank: Bronze");
}

if((playerIsAdmin || playerIsPremium) && !playerIsBanned){
    console.log("VIP access granted");
}   else {
    console.log("VIP access denied");
}

const itemPrice = 1200;
if(playerGold >= itemPrice ){
    if(playerLevel >= 20) {
        console.log("Purchase successful");
    }   else {
        console.log("Level too low");
    }
}   else {
    console.log("Not enough gold");
}

if(!playerIsBanned && (playerIsAdmin || (playerIsPremium && playerLevel >= 20))){
    console.log("Secret Dungeon unlocked");
}   else {
    console.log("Secret Dungeon locked");
}