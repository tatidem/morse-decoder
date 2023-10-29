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
    const chunks = expr.match(/.{10}/g); // Split input into 10-character chunks
    let decoded = '';

    for (const chunk of chunks) {
        if (chunk === '**********') {
            decoded += ' '; // Space
        } else {
            let morse = '';
            for (let i = 0; i < chunk.length; i += 2) {
                const symbol = chunk.slice(i, i + 2);
                if (symbol === '10') {
                    morse += '.';
                } else if (symbol === '11') {
                    morse += '-';
                }
            }
            decoded += MORSE_TABLE[morse];
        }
    }

    return decoded;
}

module.exports = {
    decode
}