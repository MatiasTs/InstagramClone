const mongoose = require("mongoose");
require("dotenv").config( { path: "../server/.env"} );
const {ApolloServer} = require("apollo-server");
const typeDefs = require("../server/gql/schema");
const resolvers = require("../server/gql/resolvers");

module.exports = ( ) => {

    

    async function conectarBD() {
        try {
          await mongoose.connect(process.env.BBDD);
          server();
        } catch (err) {
          console.error("Error al conectar a la base de datos:", err);
        }
      }

      conectarBD();

      function server(){
        const serverApollo = new ApolloServer({
          typeDefs,
          resolvers,

        })

        serverApollo.listen().then(({url}) => {
          
          console.log(`Servidor listo en la url: ${url}`);
        })

      }

}