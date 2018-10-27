const timeToText = require('./timeToText');

function processPast(h, m){
    const minuteTime = timeToText(m);
    const hourTime = timeToText(h);

    let time = minuteTime;

    switch(m){
        case 1:{
            time += ' minute past ';
            break;
        }
        case 30:
            case 15:{
            time += ' past ';
            break;
        }
        default:{
            time += ' minutes past ';
        }
    }

    time += hourTime;
    
    return time;
}

module.exports = processPast;