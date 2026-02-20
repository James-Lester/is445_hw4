function validateNumber(x) {
   const n = Number(x);

   if (
      Number.isNaN(n) ||
      typeof x === "boolean" ||
      x === "" ||
      x.trim?.() === "" ||
      n > 100 ||
      n < 1
   ) {
      console.log(`Sorry, ${x} is not a valid entry.`);
      return;
   }

   console.log(`Thank you! You entered ${x}, a valid number.`);
}

console.log("Testing validateNumber()...");

validateNumber(3);
validateNumber(3.5); 
validateNumber("hello");
validateNumber(" "); 
validateNumber(true);


// Do NOT remove the following line
export default validateNumber;