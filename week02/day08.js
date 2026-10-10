// DAY 8
// FINAL CHALLENGE: USER VALIDATOR

function normalizeUsername(username) {
    username = username.trim().toLowerCase();
    return username;
}
function isValidUsername(username) {
    username = username.trim();
    if (username.length < 5 || username.includes(" ")) {
        return false;
    }   
    return true;
}
function isValidEmail(email) {
    email = email.trim().toLowerCase();
    if (!email.includes("@") || !email.includes(".")) {
        return false;
    }
    return true;
}
function getEmailDomain(email) {
    email = email.trim().toLowerCase();
      if(!email.includes("@")){
        return null;
    }
    const domain = email.slice(atIndex + 1);
    const atIndex = email.indexOf("@");
    return domain;
}

console.log(normalizeUsername("   HauDeV   "));
console.log(isValidUsername("  HauDe  "));
console.log(isValidUsername("Hau Dev"));
console.log(isValidUsername("Hau"));
console.log(isValidEmail("  HauDev@Gmail.com  "));
console.log(isValidEmail("haudevgmailcom"));
console.log(getEmailDomain("  HauDev@Gmail.com  "));