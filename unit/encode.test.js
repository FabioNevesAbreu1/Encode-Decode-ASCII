const encode = require('../src/controllers/encode')

describe('Encode test', () => {
    it(`Encode 'Fabio' to be '111501897907'`, () => {
        const text = encode({text: "Fabio"})

        expect(text).toEqual({encrypted:"111501897907"})
    });

    it(`Encode 'ASCII' to be '3737763856'`, () => {
        const text = encode({text: "ASCII"})

        expect(text).toEqual({encrypted:"3737763856"})
    });

    it(`Encode 'Encode' to be '1010011119901196'`, () => {
        const text = encode({text: "Encode"})

        expect(text).toEqual({encrypted:"1010011119901196"})
    });
});