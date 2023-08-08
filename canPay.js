function canPay(changeArray, totalDue) {
    const sumArray = changeArray[0] + changeArray[1] + changeArray[2];
    if( changeArray.length === 0 ){
        return "Please Fill Up The Array First!";
    }
    else{
        if(sumArray >= totalDue){
            return true;
        }
        else{
            return false;
        }
    }
}
const checkFirstInputs = [1,2,5];
const checkSecondInputs = 10;
const canPayResult = canPay(checkFirstInputs,checkSecondInputs);
console.log(canPayResult);