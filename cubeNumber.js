function cubeNumber(number) {
    if (number >= 0) {
        return Math.pow(number, 3);
    }
    else {
        return "Please Input Positive Number. OtherWise Its Not Working!";
    }
}
const number = 3;
const cubeNumberResult = cubeNumber(number);
console.log(cubeNumberResult);