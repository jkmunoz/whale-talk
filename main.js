let input = ("There you are. I've been looking for you.");

const vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];

for (let i = 0; i < input.length; i++) {
    const inputLetters = input[i];

    if (inputLetters === 'e') {
        resultArray.push(input[i]);
    }

    if (inputLetters === 'u') {
        resultArray.push(input[i]);
    }

    // console.log(letters.length);
    for (let j = 0; j < vowels.length; j++) {
        const vowelLetters = vowels[j];
 
        if (inputLetters === vowelLetters) {
            console.log(inputLetters);
        }
    }
}

const resultString = resultArray.join(' ').toUpperCase();

console.log(resultString);