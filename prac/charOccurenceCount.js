let string = 'GeGeksForGeeks';
let char = 'G';

function checkOccurence(str, char) {
    let elemStr = str.split('');
    let count = 0;
    for (let i = 0; i < elemStr.length; i++) {
        if (elemStr[i] === char || elemStr[i].toLowerCase() === char.toLowerCase()) {
            count++;
        }
    };
    return count;
}
console.log(checkOccurence(string, char));


function checkOccurence1(str, char) {
    let elemStr = str.split(char);
    let count = 0;
    for (let i = 0; i < elemStr.length; i++) {
        if (elemStr[i] === char || elemStr[i].toLowerCase() === char.toLowerCase()) {
            count++;
        }
    };
    return count;
}
console.log(checkOccurence1(string, char));