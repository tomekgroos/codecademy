const prompt = require('prompt-sync')({sigint: true});

let hat = '^';
let hole = 'O';
let fieldCharacter = '░';
let pathCharacter = '*';

class Field {
    constructor(field){
        this.field = field;
    }

    print(){
        return this.field;
    }

    showStart(){
        return this.field[0][0];
    }
}

const myField = new Field ([
    [pathCharacter, fieldCharacter,hole],
    [fieldCharacter,hole,fieldCharacter],
    [fieldCharacter,hat,fieldCharacter],
])


   myField.forEach(field => {
        console.log(field);
    });

console.log(myField.print());

console.log(myField.showStart());

showField();

