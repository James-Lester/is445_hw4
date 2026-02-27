function getStatistics(numbers) {
   let n = new Array(...numbers);
   let obj = {
      "firstElement": n[0],
      "lastElement": n[n.length - 1],
      "length": n.length
   };

   return obj;
}

console.log("Testing getStatistics()...");

let arr = Array.from({ length: 40 }, () => Math.floor(Math.random() * 40));
console.log(getStatistics(arr));
arr = Array.from({ length: 40 }, () => Math.floor(Math.random() * 40));
console.log(getStatistics(arr));
arr = Array.from({ length: 40 }, () => Math.floor(Math.random() * 40));
console.log(getStatistics(arr));
arr = Array.from({ length: 40 }, () => Math.floor(Math.random() * 40));
console.log(getStatistics(arr));
