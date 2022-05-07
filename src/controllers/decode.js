const { splitAndReverse } = require('../helpers/utils')

const Regex = new RegExp(
    /(6[0-9]|7[0-9]|8[0-9]|90)|(9[7-9]|1[0-1][0-9]|12[0-2])|(32)/gm
  ); 

function decode({text}){

    const splitedText = splitAndReverse(text);

    const filtredText = splitedText.split(Regex).filter((charCode) => typeof charCode !== "undefined" && charCode != "")

    return { decrypted: filtredText.map((e) => String.fromCharCode(Number(e))).join("") }
    

}

module.exports = decode