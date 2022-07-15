// Write a program to calculate purchases from a kiosk. For e.g. given the fruit name 
// 'orange' the program should fetch its price (30.00) and multiply with the quantity 
// requested (2) and return total cost in this printed format (2 Oranges for KES 
// 60.00). 
// calculateFruitCost(fruitName, quantity)
// For example, calculateFruitCost('orange', 2) should return "2 Oranges for KES 
// 60.00"
var Kiosk=[
{name:"Papaya",
fruitPrice:150,
},
{name:"apples",
fruitPrice:200,
},
{name:"avocado",
fruitPrice:50,
}]
function calcfruitsCost(name,quantity){
    let f=Kiosk.find(item=>item.name===name)
    console.log(`${quantity} ${name} for KES ${f.fruitPrice*quantity}`)

}
calcfruitsCost("apples",5)
// Write a class KioskCalc that has the following fruitsPriceList object.
//  this.fruitsPriceList = { "orange": 30, "mango": 15, "avocado": 40 }; 
// and takes two parameters (fruit, quantity) when initialized i.e. 
// var kioskCalc = new KioskCalc(“orange”, 2);
// Thereafter, it allows one to calculate the total cost of the fruit by accessing the 
// getTotalCost( ) method. 
// kioskCalc.getTotalCost( )  // returns “2 orange for KES 60”
 
class KioskCalc{
    constructor(fruits,quantity){
        this.fruits=fruits
        this.quantity=quantity
        this.fruitsPriceList = { "orange": 30, "mango": 15, "avocado": 40 }; 
        this.getTotalCoast=function(){
            return `${quantity} ${fruits} for KES ${quantity*this.fruitsPriceList.mango}`
        }
    }
    
}
var grocery= new KioskCalc("mango",7);
console.log(grocery.getTotalCoast());