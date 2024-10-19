class Fruit{
    constructor (name, color){
        this.name = name
        this.color = color
    }
}

var fruit1 = new Fruit("apple", "red")
var fruit2 = new Fruit("orange", "orange")

console.log(fruit1.name)
console.log(fruit1.color)
console.log(fruit2.name + "<br>" + fruit2.color)