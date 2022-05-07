const decode = require('../src/controllers/decode')

describe('Decode test', () => {
    it(`Decode '111501897907' to be 'Fabio'`, () => {
        const text = decode({text: "111501897907"})

        expect(text).toEqual({"decrypted": "Fabio"})
    });

    it(`Decode 'ASCII' to be '3737763856'`, () => {
        const text = decode({text: "3737763856"})

        expect(text).toEqual({"decrypted": "ASCII"})
    });

    it(`Decode 'Decode' to be '1010011119910186'`, () => {
        const text = decode({text: "1010011119910186"})

        expect(text).toEqual({"decrypted": "Decode"})
    });
});