const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type User {
        _id: ID!
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }

    type Book {
        bookId: String!
        title: String
        authors: [String]
        description: String
        image: String
        link: String
    }

    input BookData {
        bookId: ID!
        authors: [String]
        description: String
        title: String
        image: String 
        link: String
    }

    type Query {
        me: User
    }

    type Auth {
        token: ID!
        user: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(BookData: BookData!): User
        removeBook(bookId: ID!): User
    }
`;

module.exports = typeDefs;