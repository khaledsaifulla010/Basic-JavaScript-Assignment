function sortMaker(arr) {

    if (arr[0] < 0 || arr[1] < 0) {
        return "Input Invalid";
    }
    else if (arr[0] === arr[1]) {
        return "equal";
    }
    else {
        if (arr[0] < arr[1]) {
            [arr[0], arr[1]] = [arr[1], arr[0]];
            return arr;
        }
        else if (arr[0] > arr[1]) {
            [arr[1], arr[0]] = [arr[1], arr[0]];
            return arr;
        }
    }
}
const checkInputs = [4, 2];
const sortMakerResult = sortMaker(checkInputs);
console.log(sortMakerResult);