function timeToText(number){
    switch(number){
        case 1: return 'one';
        case 2: return 'two';
        case 3: return 'three';
        case 4: return 'four';
        case 5: return 'five';
        case 6: return 'six';
        case 7: return 'seven';
        case 8: return 'eight';
        case 9: return 'nine';
        case 10: return 'ten';
        case 11: return 'eleven';
        case 12: return 'twelve';
        case 13: return 'thirteen';
        case 14: return 'fourteen';
        case 15: return 'quarter';
        case 16: return 'sixteen';
        case 17: return 'seventeen';
        case 18: return 'eighteen';
        case 19: return 'nineteen';
        case 20: return 'twenty';
        case 30: return 'half';
        case 40: return 'fourty';
        case 50: return 'fifty';
    }
    if(number > 20 && number < 30){
        const n = number - 20;
        return 'twenty ' + timeToText(n);
    }else if(number > 30 && number < 40){
        const n = number - 30;
        return 'thirty ' + timeToText(n);
    }else if (number > 40 && number < 50){
        const n = number - 40;
        return 'fourty ' + timeToText(n);
    }else if (number > 50 && number < 60){
        const n = number - 50;
        return 'fifty ' + timeToText(50);
    }
}

module.exports = timeToText;