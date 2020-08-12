const menu = {
    _courses: {
    appetizers: [],
    mains: [],
    desserts: [],

  },
  get appetizers(){
    return this._courses.appetizers;
  },
    get mains(){
      return this._courses.mains;
    },
    get desserts(){
      return this._courses.desserts;
  },
  set appetizers(appetizers){
    this._courses.appetizers = appetizers;
  },

  set mains(mains){
    this._courses.mains = mains;
  },

  set desserts(desserts){
    this._courses.desserts = desserts;
  },
  get courses(){
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },

  addDishToCourse (courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice 
    };
    this._courses[courseName].push(dish);
  },

  getRandomDishFromCourse (courseName) {

   const dishes = this._courses[courseName]
   const randomIndex = Math.floor(Math.random() * dishes.length);
   return dishes[randomIndex];

  },

generateRandomMeal () {
  const appetizer = this.getRandomDishFromCourse('appetizers');
  const main = this.getRandomDishFromCourse('mains');
  const dessert = this.getRandomDishFromCourse('desserts');
  const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name}, 
    ${dessert.name} and total price is ${totalPrice}`;
}
  
};

menu.addDishToCourse('appetizers', 'Melanzane Ripiene', 6.00);
menu.addDishToCourse('appetizers', 'Bruschetta', 3.00);
menu.addDishToCourse('appetizers', 'Foccacia', 3.00);

menu.addDishToCourse('mains', 'Pizza', 9.00);
menu.addDishToCourse('mains', 'Penne Marinara', 10.00);
menu.addDishToCourse('mains', 'Bistecca di Manzo', 30.00);

menu.addDishToCourse('desserts', 'Tiramisu', 5.00);
menu.addDishToCourse('desserts', 'Gelato', 3.00);
menu.addDishToCourse('desserts', 'Granita', 2.00);

console.log(menu._courses);

console.log(menu.generateRandomMeal());
