function validateMethod(routes, method, url){
   if (!Object.keys(routes).includes(method)) {
       return {
          error: {
           status: 404,
           msg: "Method not allowed",
          }
       };
    }
    if (!Object.keys(routes[method]).includes(url)) {
      return {
         error: {
          status: 404,
          msg: "Route not Found",
         }
      };
    }
    return
}

module.exports = validateMethod