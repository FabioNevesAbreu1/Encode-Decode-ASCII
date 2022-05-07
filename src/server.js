const http = require("http");
const port = 8090

const routes = require('./routes')
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
            response.writeHead(status, {
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
