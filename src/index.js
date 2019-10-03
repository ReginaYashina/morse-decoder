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
    let string = '';
    
    let arr = expr.match(/.{10}/g);
    
    let arr_dec = arr.map(function (elem) {
    return elem.replace(/10/g, '.').replace(/11/g, '-').replace(/\*\*\*\*\*\*\*\*\*\*/g, ' ').replace(/^0{1,9}/g,''); 
    });
  
    for (let i=0; i < arr_dec.length; i++){
    if(arr_dec[i] == ' '){
      string = string + ' ';
    } else {
      for (key in MORSE_TABLE) {
        if (key == arr_dec[i]) {
          string = string + MORSE_TABLE[key];
         };
        }
    }
    }
    return string
  }

module.exports = {
    decode
}