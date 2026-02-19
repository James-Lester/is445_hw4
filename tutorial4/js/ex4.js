function calcWordFrequencies(words) {
    let wl = words.split(" ");
    let wm = new Map();

    wl.forEach(word => {
        wm.set(word, (wm.get(word) ?? 0) + 1);
    });

    for (let [word, count] of wm) {
        console.log(`${word} ${count}`)
    };

}

console.log("Testing calcWordFrequencies()...");
calcWordFrequencies("hey hi Mark hi mark");



// Do NOT remove the following line:
export default calcWordFrequencies;