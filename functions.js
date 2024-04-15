const { timeStamp } = require("console");

function response(status, message, data = null){
    return {
        status,
        message,
        data,
        //quando aconteceu tal requisição, recupera a informação, é arquivada graças a essa propriedade - timeStamp
        timeStamp: new Date().getTime()
    }
}

module.exports = {
    response
}