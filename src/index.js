module.exports = function toReadable (number) {
    const numbers = ['zero', 'one', 'two','three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
  'twelve', 'thirteen', 'fourteen','fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'thirty', 'fourty',
  'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'I do not know so big numbers!'],
          factor = ['', 'thousand', 'million', 'billion'];
    
    let length = String(number).length,
    array = [];
    
    for (let i = Math.floor(length/3); i > 0; i--) {
        array.push(String(number).slice(length - i * 3, length - (i - 1)*3));
    }
    if (length % 3) array.unshift(String(number).slice(0, length % 3));
    if (array.length > 4) {array = []; array.push(numbers[28]); return array.join('')};
    
    
    for (i = array.length; i > 0; i--) array[array.length - i] = sayNumber(array[array.length - i], i);
    
    
    return array.join(' ');
  
    function sayNumber(el, i) {
      if (el.length == 1) el = `${numbers[+el[0]]}`;
      if (el.length == 2 & +(el[0] + el[1]) <= 20) el = `${numbers[+(el[0] + el[1])]}`;
      if (el.length == 2 & +(el[0] + el[1]) > 20) {el = `${numbers[+el[0] + 18]} ` + `${numbers[+el[1]]}`; el = el.replace('zero', '')};
      if (el.length ==3 & +(el[1] + el[2]) <= 20) {el = `${numbers[+el[0]]} hundred ` + `${numbers[+(el[1] + el[2])]}`; el = el.replace(/zero/g, '')};
      if (el.length ==3 & +(el[1] + el[2]) >20) {el = `${numbers[+el[0]]} hundred ` + `${numbers[+el[1] + 18]} ` + `${numbers[+el[2]]}`; el = el.replace(/zero/g, '')};
      el = el + ` ${factor[i -1]}`;
      return el; 
    }
  }
