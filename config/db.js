const mongoose = require("mongoose");
require("dotenv").config( { path: "../server/.env"} );

module.exports = ( ) => {

    

    async function conectarBD() {
        try {
          await mongoose.connect(process.env.BBDD);
          console.log("Conexión a la base de datos establecida correctamente");
        } catch (err) {
          console.error("Error al conectar a la base de datos:", err);
        }
      }

      conectarBD();

}