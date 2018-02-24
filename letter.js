function Letter (letter){
    this.letter = letter;
    this.guessed = false;
    this.replacement = function(){
        // console.log(this.guessed);
        if(this.guessed === false){
            // console.log(" _ ");
            return " _ ";
        }
        else{
            return " " + this.letter + " ";
            // console.log(" " + this.letter + " ");
            // console.log(this.letter);
        };

        this.guessed = false;
    };
    this.guess = function(char){
        if(this.letter === char){
            this.guessed = true;
        };
        this.replacement();
    };
}

// Letter("O");

// console.log(guess("O"));

module.exports = Letter;