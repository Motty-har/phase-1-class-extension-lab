class Polygon{
    constructor (array){
        this.array = array
    }
    get countSides(){
    return this.array.length
    }
    get perimeter(){ 
        return this.array.reduce((acc, element) =>
        acc + parseInt(element), 0)
    } 
    
    }

    class Triangle extends Polygon{
        get isValid(){
        if(this.array[0, 1] > this.array[2]){
                return false
            }else{
                return true
            }
        }
    }

    class Square extends Polygon{
        get isValid(){
           if(this.array.reduce((acc, value) => 
            acc + parseInt(value), 0) / 4 === this.array[0, 1, 2, 3]){
                return true
            }else{
                return false
            }
            }
        get area(){
            return Math.pow(this.array[1], 2)
        }
    }