const { splitAndReverse } = require('../helpers/utils')

function encode({text}){
    
    const reverseText = text.split("").map(char => char.charCodeAt(0)).join("")

    return { encrypted: splitAndReverse(reverseText) }
    
}

module.exports = encode