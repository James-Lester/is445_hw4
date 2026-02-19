function sortEvens(numArray) {
    let newArray = [];
    numArray.forEach(i => {
        if (i % 2 === 0) {
            newArray.push(i);
        }
    });
    newArray.sort((a, b) => parseFloat(a) - parseFloat(b))
    return newArray;
}

console.log("Testing sortEvens()...");
let nums = [4, 2, 9, 1, 8];
let evenNums = sortEvens(nums);
console.log(evenNums);


// Do NOT remove the following line:
export default sortEvens;   