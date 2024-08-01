class Calculadora {
    constructor() {}
    sumar(...nums) {
        return nums.reduce((acc, num) => acc + parseFloat(num), 0);
    }
    restar(...nums) {
        return nums.reduce((acc, num) => acc - parseFloat(num));
    }
    multiplicar(...nums) {
        return nums.reduce((acc, num) => acc * parseFloat(num), 1);
    }
    dividir(...nums) {
        return nums.reduce((acc, num) => acc / parseFloat(num));
    }
    exponencial(num, expt) {
        return parseFloat(num) ** parseFloat(expt);
    }
    sqrt(num) {
        return Math.sqrt(parseFloat(num));
    }
    cbrt(num) {
        return Math.cbrt(parseFloat(num));
    }
}

const Calc = new Calculadora();
export default Calc;
