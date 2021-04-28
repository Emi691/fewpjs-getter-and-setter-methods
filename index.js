// Add your Circle class here
class Circle {
    constructor(radius){
        this.radius = radius 
    }

    get diameter() { 
        this._diameter = this.radius * 2
        return this._diameter    
    }

    get circumference() {
        this._circumference = this.diameter * Math.PI
        return this._circumference
    }

    get area() {
        this._area = Math.PI * (this.radius ** 2)
        return this._area
    }

    set diameter(diameter) {
        this._diameter = diameter
        this.radius = diameter / 2
    }

    set circumference(circumference) {
        this._circumference = circumference
        this.radius = (circumference / Math.PI) / 2
    }

    set area(area) {
        this._area = area
        this.radius = Math.sqrt(area / Math.PI)
    }
}