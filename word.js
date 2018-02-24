var Letter = require("./letter.js");



function Word (wordArray, randomWord){
    this.chosenWord = wordArray[randomWord].split("");
    this.wordString = function() {
        var blankSet = "";
        for(var i = 0; i < this.chosenWord.length; i++){
            blankSet += new Letter(i).replacement();
        };
        return blankSet;
        // build.replacement();
    };
    this.charGuesses = function(character) {
        var wordBuild = " ";
        var word = this.chosenWord;
        var letterVal = new Letter(character);

        for(var j = 0; j < word.length; j++){
            var letter = word[j]
            
            wordBuild += new Letter(letter).guess(character);
            console.log(wordBuild);
            // console.log(new Letter(word[j]).guess(character));
        //     // wordBuild += new Letter(j).guessed(character);
            

        };
        return wordBuild;
        // console.log(wordBuild);
    };
};


module.exports = Word;

Word(['word'], 0);

charGuesses("o");

// console.log(wordString());

