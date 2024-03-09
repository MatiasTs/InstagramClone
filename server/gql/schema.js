const { gql } = require("apollo-server");

const typeDefs = gql`
    type User {
        id: ID
        name: String
        userName: String
        password: String
        email: String
        description: String
        siteWeb: String
        createAt: Date
        avatar: String
    }

    type Query {
        # User
        getUser: User
    }

`


module.exports = typeDefs;