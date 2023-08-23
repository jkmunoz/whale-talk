//My phrase in english.
const input = "There you are. I've been looking for you.";

//array of vowels
const vowels = ['a', 'e', 'i', 'o', 'u'];

//empty array to store new array of whale language.
const resultArray = [];

for (let i = 0; i < input.length; i++) {
    const inputLetters = input[i].toLowerCase();

    if (inputLetters === 'e') {
        resultArray.push(inputLetters);
    }

    if (inputLetters === 'u') {
        resultArray.push(inputLetters);
    }

    // console.log(letters.length);
    for (let j = 0; j < vowels.length; j++) {
        const vowelLetters = vowels[j];
 
        if (inputLetters === vowelLetters) {
            resultArray.push(inputLetters);
        }
    }
}

const resultString = resultArray.join(' ').toUpperCase();

console.log(resultString);