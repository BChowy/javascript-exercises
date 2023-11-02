const palindromes = function (string) {
    //TOP solution:
    //const processedString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
    //return processedString.split("").reverse().join("") == processedString;
    let regex = /[!.,\s]/g;
    let newString = string.replace(regex, '');
    newString = newString.toLowerCase();

    let i = 0;
    let j = newString.length-1;

    while(i<j){
        if (newString[i] === newString[j]){
            i++; j--;
        }
        else return false 
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
