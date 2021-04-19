
class Hamburger {
    static SMALL = { price: 50, calories: 20 }
    static MIDDLE = { price: 75, calories: 30 }
    static BIG = { price: 100, calories: 40 }
    static CHEESE = { price: 10, calories: 5 }
    static SALAD = { price: 20, calories: 5 }
    static POTATOES = { price: 15, calories: 10 }
    static SEASONIG = { price: 15, calories: 0 }
    static MAYONNAISWE = { price: 20, calories: 5 }

    constructor(item) {
        this.item = item;
        this.arr = [];
    }

    calculatorPrice() {
        return this.arr.reduce((sum, item) => {
            return sum + item.price
        }, this.item.price)
    }

    calculatorCalories() {
        return this.arr.reduce((sum, item) => {
            return sum + item.calories
        }, this.item.calories)
    }
    add(item) {
        return this.arr.push(item);
    }
}


let ham_1 = new Hamburger(Hamburger.BIG);
ham_1.add(Hamburger.SALAD);
ham_1.add(Hamburger.CHEESE);
console.log(`Price: ${ham_1.calculatorPrice()}`);
console.log(`Calories: ${ham_1.calculatorCalories()}`);
ham_1.add(Hamburger.POTATOES);
console.log(`What is the price now: ${ham_1.calculatorPrice()}`);







