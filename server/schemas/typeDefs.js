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
        titile: String
        authors: [String]
        title: String
        image: String
        link: String
    }

    input BookData {
        bookId: ObjectId!
        authors: [String]
        description: String
        title: String
        Image: String 
        link: String
    }

    type Query {
        me: User
    }

    type: Auth {
        token: String!
        user: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(BookData: BookData!): User
        removeBook(bookId: ObjectId!): User
    }
`;

module.exports = typeDefs;