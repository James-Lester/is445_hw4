function guessNumber() {
    const rand = Math.floor(Math.random() * 100) + 1;

    let correct = false;
    let guess;
    do {
        guess = Number(prompt("Enter a number betwixt 1 and 100, inclusive"));
        if (rand > guess) {
            console.log("Too low, guess again.")
        }

        if (rand < guess) {
            console.log("Too high, guess again.")
        }

        if (rand === guess) {
            console.log("Correct")
            correct = true;
        }
    } while (!correct);
}
