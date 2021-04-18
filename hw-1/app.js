
let orderlist = [];
class Hamburger{
    static SMALL = {price:50,calories:20}
    static MIDDLE = {price:75,calories:30}
    static BIG = {price:100,calories:40}
    static CHEESE = {price:10,calories:520}
    static SALAD = {price:20,calories:5}
    static POTATOES = {price:15,calories:10}
    static SEASONIG = {price:15,calories:0}
    static MAYONNAISWE = {price:20,calories:5}

    constructor(item){
        this.item = item;
    }

    price(){
        console.log(this.item.price);
    }

    calories(){
        console.log(this.item.calories);
    }

}


let ham_1 = new Hamburger(Hamburger.MIDDLE);
console.log(ham_1);



