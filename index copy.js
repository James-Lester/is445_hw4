function isStrongPassword(password) {
   // TODO: Write your solution here 
   const hasNoPw = /^(?!.*(password)).*$/  
   const hasUpper = /[A-Z]/;
   const minLength = /(?=(?:\w){8,})/;
   // console.log(password);
   // console.log(hasNoPw.test(password));
   // console.log(hasUpper.test(password));
   // console.log(minLength.test(password));
   return hasNoPw.test(password) && hasUpper.test(password) && minLength.test(password);
}

console.log("Testing isStrongPassword()...");

console.log("Qwerty - " + isStrongPassword("Qwerty"));                  // false - Too short
console.log("passwordQwerty - " + isStrongPassword("passwordQwerty"));  // false - Contains "password"
console.log("qwerty123 - " + isStrongPassword("qwerty123"));            // false - No uppercase chars
console.log("Qwerty123 - " + isStrongPassword("Qwerty123"));            // true


// Do NOT remove the following line:
export default isStrongPassword;
