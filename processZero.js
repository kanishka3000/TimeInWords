const timeToText = require('./timeToText');

function processO(h, m){
    const hourTime = timeToText(h);
    return `${hourTime} o' clock`;
}

module.exports = processO;