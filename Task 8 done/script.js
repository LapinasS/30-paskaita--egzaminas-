/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */


function Calculator(numberOne, numberTwo){
    this.numberOne = numberOne;
    this.numberTwo = numberTwo;
    this.sum = function () {
        return `${this.numberOne + this.numberTwo}`
    }
    this.subtraction = function () {
        return `${this.numberOne - this.numberTwo}`
    }
    this.multiplication = function () {
        return `${this.numberOne * this.numberTwo}`
    }
    this.division = function () {
        return `${this.numberOne / this.numberTwo}`
    }
}

const calc = new Calculator (3,2);

console.log(calc);
console.log(calc.sum()) 
console.log(calc.subtraction()) 
console.log(calc.multiplication()) 
console.log(calc.division()) 