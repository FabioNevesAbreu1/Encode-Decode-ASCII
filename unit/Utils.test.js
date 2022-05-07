const {splitAndReverse} = require('../src/helpers/utils')

describe('Utils test', () => {
    it(`Test reverse string 'Fabio' to be 'oibaF'`, () => {
        const text = splitAndReverse("Fabio")

        expect(text).toEqual("oibaF")
    });

    it(`Decode 'ASCII' to be 'IICSA'`, () => {
        const text = splitAndReverse("ASCII")

        expect(text).toEqual("IICSA")
    });

    it(`Decode 'Monetizze' to be 'ezzitenoM'`, () => {
        const text = splitAndReverse("Monetizze")

        expect(text).toEqual("ezzitenoM")
    });
});