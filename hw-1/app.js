class Gamburger{
    static SMALL = {size:50,calories:20}
    static MIDDLE = {size:75,calories:30}
    static BIG = {size:100,calories:40}
    static CHEESE = {size:10,calories:520}
    static SALAD = {size:20,calories:5}
    static POTATOES = {size:15,calories:10}
    static SEASONIG = {size:15,calories:0}
    static MAYONNAISWE = {size:20,calories:5}

    constructor(size,price,calories){
        this.size = size;
        this.price = price;
        this.calories = calories;
    }
}