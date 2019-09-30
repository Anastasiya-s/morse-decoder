const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let symbolsArray = [];
    for (let i = 0; i < expr.length; i += 10) {
        symbolsArray.push(expr.slice(i, i + 10))
    }
    const removeZeros = str => {
        if (str.indexOf(1) === -1) { return ' '}
        return str.slice(str.indexOf(1))
    }
    const replaceWithDots = str => {
        if (str === ' ') {
            return ' '
        }
        for (let i = 0; i < str.length; i++) {
            str = str.replace('11', '-')
            str = str.replace('10', '.')
        }
        return str;
    }
    const decodedString = symbolsArray
        .map(item => removeZeros(item))
        .map(item => replaceWithDots(item))
        .map(item => MORSE_TABLE[item]||' ')
        .join('')
    
    return decodedString;
}

module.exports = {
    decode
}