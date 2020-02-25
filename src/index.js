module.exports = function toReadable (number) {
    +number;
    let result = '';
    let piecesOfResult = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
        100: "one hundred",
        'hundr' : 'hundred'
    }
    
    number = number.toString();
    let other = +(number.slice(1));
    if(number == 0) return piecesOfResult[0];
    if(piecesOfResult[number]) return piecesOfResult[number];
    
    if(number.length == 3){
        result += piecesOfResult[number[0]] +' '+ piecesOfResult.hundr + ' ';
    }
    if(other < 20){
        result += piecesOfResult[+other];
    }else if(other => 20) {
        
         result += piecesOfResult[ (number[number.length - 2]*10) ] + ' ';
         result += piecesOfResult[ number[number.length - 1] ]
    }
    return result





    
  
}
