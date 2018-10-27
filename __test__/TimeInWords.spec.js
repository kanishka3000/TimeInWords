require('jest');
const { TestScheduler } = require('jest');
const timeInWords = require('../scripts/timeInWords');

describe('first' , ()=>{
    test('a', ()=>{
        const s = timeInWords(5, 1);
        expect(s).toEqual('one minute past five');
    })

    test('b', ()=>{
        const s = timeInWords(5, 0);
        expect(s).toEqual('five o\' clock');
    })

    test('c', ()=>{
        const s = timeInWords(5, 57);
        expect(s).toEqual('three minutes to six');
    });

    test('d', ()=>{
        const s = timeInWords(5,30);
        expect(s).toEqual('half past five');
    });

    test('e', ()=>{
        const s = timeInWords(5, 45);
        expect(s).toEqual('quarter to six');
    });

    test('f', ()=>{
        const s = timeInWords(5, 15);
        expect(s).toEqual('quarter past five');
    })

});

