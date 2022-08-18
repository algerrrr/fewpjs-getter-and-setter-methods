// Add your Circle class here
class Circle {
    constructor(radius){
        this.radius = radius
    }
    get diameter() {
        return this.radius*2;
    }
    
    set diameter(a) {
        this.radius = a/2
    }

    get circumference() {
        return 2 * Math.PI * this.radius;
    }
    set circumference(a) {
         this.radius = (a * 0.5)/ Math.PI;
         
    }
    get area(){
        return Math.PI*this.radius*this.radius;
    }
    set area(a) {
        this.radius = Math.sqrt(a/Math.PI);
    }

}
let c = new Circle(3)

console.log(c.area)