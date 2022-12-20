// selct text input box
let textBox = document.querySelector(`.textBox`);
let wordCount = 0;
let charCount = 0;

textBox.addEventListener(`keydown`, (e) => {
    console.log(`${e.keyCode} ${e.key} is pressed`);

    if (e.keyCode == 8 && charCount > 0) {
        console.log(`Backspace is trapped`);
        charCount -= 1;
        document.querySelector(`.totalChar`).innerText = charCount.toString();
        return;
    }

    if (e.keyCode != 8 && e.keyCode != 32) {
        charCount += 1;
        document.querySelector(`.totalChar`).innerText = charCount.toString();
        console.log(charCount);
    }
    
    if (e.keyCode == 32) {
        wordCount += 1;
        document.querySelector(`.totalWords`).innerText = wordCount.toString();
    }
});

