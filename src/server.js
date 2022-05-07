const http = require("http");
const port = 8090

const routes = {
   POST: {
      "/encode": require('./controllers/encode'),
      "/decode": require('./controllers/decode'),
   },
};
const validateMethod = require('./middleware/validateMethod')
const validateBody = require('./middleware/validate')


http
   .createServer((request, response) => {

      const valitation = validateMethod(routes, request.method, request.url)

      if(valitation && Object.keys(valitation)[0] == 'error'){
        const  { msg, status } = valitation.error;
        
         response.writeHead(status, {
            "Content-Type": "application/json"
         });

         response.write(
            JSON.stringify({
               msg: msg,
               status: status
            })
         );
         return response.end();
      }

      request.on("data", async function (chunk) {
         try {
            if (!Object.keys(routes).includes(request.method)) {
               throw {
                  status: 404,
                  msg: "Method not allowed",
               };
            }

            if (!Object.keys(routes[request.method]).includes(request.url)) {
               throw {
                  status: 405,
                  msg: "Route not found",
               };
            }

            const {error, ...body} = validateBody(JSON.parse(chunk + ""), request.url)
            if(error){
               throw error
            }

            const result = routes[request.method][request.url](body);

            response.writeHead(200, {
               "Content-Type": "application/json"
            });
            response.write(JSON.stringify(result));
            
            return response.end();
         } catch ({status, msg}) {
            response.writeHead(200, {
               "Content-Type": "application/json"
            });
            response.write(
               JSON.stringify({
                  msg,
                  status
               })
            );

             response.end();
         }
      });

   })
   .listen(8090, () => console.log(`Server is runing on port ${port}`));
