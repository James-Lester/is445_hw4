function guessNumber() {
    const rand = Math.floor(Math.random() * 100) + 1;

    let correct = false;
    let guess;
    let guesses = 0;
    do {
        guess = Number(prompt("Enter a number betwixt 1 and 100, inclusive"));
        if (guess == null) {
            return;
        }
        else {
            guesses++;
        }
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

    alert(`You guessed correctly after ${guesses} tries.`)
}
