const resolvers = {
    // User
    Query: {
        
        getUser: () => {
            console.log("Obteniendo usuario");
            return null;
        }
    },
    Mutation: {
        // User
        register: (_, { input }, context) => {
            console.log("Registrando usuarios");
            console.log(input);
            return null;
        }
    }
}

module.exports = resolvers;