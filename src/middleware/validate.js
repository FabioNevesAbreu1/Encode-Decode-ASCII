const validate = {
    '/encode': (body) => {
        if(!body.text){
            return {error: {
             status: 400,
             msg: 'body.text must be defined'
            }}
        }
       else if(typeof body.text != 'string'){
           return {error: {
            status: 400,
            msg: 'body.text must be a string'
           }}
       }
        return body
       
    },
    '/decode': (body) => {
        if(!body.text){
            return {error: {
             status: 400,
             msg: 'body.text must be defined'
            }}
        }
       else if(typeof body.text != 'string'){
        return {error: {
         status: 400,
         msg: 'body.text must be a string'
        }}
    }
        return body
    }
}

module.exports = (body, url) => {
    return validate[url](body)
}