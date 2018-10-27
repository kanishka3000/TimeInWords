const timeToText = require('./timeToText');

function processTo(h, m){
    const minute =  60 - m;
    const minuteTime = timeToText(minute);
    const hourTime = timeToText(h + 1);
    let time = minuteTime;

    switch(m){
        case 1:{
            time+= ' minute to ';
            break;
        }
        case 45:{
            time += ' to ';
            break;
        }
        default:{
            time += ' minutes to ';
        }
    }
    time += hourTime;
    return time;
}

module.exports = processTo;