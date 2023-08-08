function matchFinder(string1, string2) {
    if (typeof string1 === 'string' && typeof string2 === 'string') {
        return string1.includes(string2);
    }
    else if (typeof string1 === 'string' && typeof string2 === 'string') {
        return string1.includes(string2);
    }
    else {
        return "Invalid Inputs!";
    }
}
const firstString = "John Doe";
const secondString = 'ohn';
const matchFinderResult = matchFinder(firstString, secondString);
console.log(matchFinderResult);