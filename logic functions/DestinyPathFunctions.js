var getLifeNumber = require('./LifePathFunctions');

const getNumberFromLetter = (letter)=>{
    switch(letter){
        case 'A':
        case 'J':
        case 'S':
            return '1'
        case 'B':
        case 'K':
        case 'T':
            return '2'
        case 'C':
        case 'L':
        case 'U':
            return '3'
        case 'D':
        case 'M':
        case 'V':
            return '4'
        case 'E':
        case 'N':
        case 'W':
            return '5'
        case 'F':
        case 'O':
        case 'X':
            return '6'
        case 'G':
        case 'P':
        case 'Y':
            return '7'
        case 'H':
        case 'Q':
        case 'T':
            return '8'
        case 'I':
        case 'R':
            return '9'
        default:
            return '0' 
    }
}

const getDestinyNumberFromName = (name)=>{
    const nameToArr = name.toUpperCase().split('').filter(letter => letter != ' ');
    const mapNameToNum = nameToArr.map((letter)=>getNumberFromLetter(letter)).join('');
    const destinyNum = getLifeNumber(parseInt(mapNameToNum));
    return destinyNum
}

module.exports = getDestinyNumberFromName;