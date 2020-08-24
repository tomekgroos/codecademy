// parent class Media

class Media {
    constructor(title){
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    get title(){
        return this._title;
    }

    get isCheckedOut(){
        return this._isCheckedOut;
    }

    get ratings() {
        return this._ratings;
    }

    // method switches boolean value

    toggleCheckedOutStatus(){
      this._isCheckedOut = !this._isCheckedOut;
    }

    getAverageRating(){

        const sum = (tempSum, value) => tempSum + value;

        return this.ratings.reduce(sum) / this.ratings.length;
    }

    addRating(inputValue){
        this.ratings.push(inputValue);
    }
        
    set isCheckedOut(newIsCheckedOut){
        this._isCheckedOut = newIsCheckedOut;
    }
}
    
// child class Book

class Book extends Media {
    constructor(author, title, pages){
        super(title);
        this._author = author;
        this._pages = pages;
    }

    get author(){
        return this._author;
    }

    get pages(){
        return this._pages;
    }
}

// child class Movie

class Movie extends Media {
  constructor(director, title, runTime){
      super(title);
      this._runTime = runTime
      this._director = director
  }

  get runTime(){
      return this._runTime
  }

  get director(){
      return this._director
  }
}

// creating new Book instance

const historyOfEverything = new Book('Bil Bryson', 'A Short History of Nearly Everything', 544);

// using toggleCheckedOutStatus on historyOfEverything instance
// ang logged into the console

historyOfEverything.toggleCheckedOutStatus()        

console.log(historyOfEverything.isCheckedOut);

// adding three ratings 

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

console.log(historyOfEverything.getAverageRating());

// creating new Movie instance and calling same methods as on previous instance

const speed = new Movie('Jan de Bont', 'Speed', 116);

speed.toggleCheckedOutStatus();

console.log(speed.isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

console.log(speed.getAverageRating());

