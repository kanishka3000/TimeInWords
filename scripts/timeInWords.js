const processO = require('./processZero');
const processPast = require('./processPast');
const processTo = require('./processTo');

function timeInWords(h, m) {

    if(m == 0){
        return processO(h, m);
    }else if (m <= 30){
        return processPast(h, m);
    }else {
        return processTo(h, m);
    }
}

module.exports = timeInWords;