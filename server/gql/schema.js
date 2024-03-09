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
        createAt: String
        avatar: String
    }

    input UserInput{
        name: String!
        username: String!
        email: String!
        password: String!
    }

    type Query {
        # User
        getUser: User
    }


    type Mutation {
        # User
        register(input: UserInput): User
    }

`


module.exports = typeDefs;