import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLID,
    GraphQLString,
    GraphQLList,
    GraphQLSchema,
    GraphQLNonNull
} from 'graphql';

import Db from '../db';

const StudentType = new GraphQLObjectType({
    name: 'Student',
    description: 'This represents a Student',
    fields: () => {
        return {
            id: { type: GraphQLID },
            firstName: {  type: GraphQLString },
            lastName: { type: GraphQLString },
            birthDate: { type: GraphQLString },
            hobbies: { type: GraphQLString },
            photo: { type: GraphQLString },
        }
    }
});

const Query = new GraphQLObjectType({
    name: 'Query',
    description: 'This is a root query',
    fields: () => ({
        students: {
            type: new GraphQLList(StudentType),
            args: {
                id: {
                    type: GraphQLID
                },
                firstName: {
                    type: GraphQLString
                },
                lastName: {
                    type: GraphQLString
                }
            },
            resolve(root, args) {
                return Db.models.student.findAll({where: args});
            }
        },
        students: {
            type: new GraphQLList(StudentType),
            resolve(root, args) {
                return Db.models.student.find({});
            }
        }
    })
});

// const Mutation = new GraphQLObjectType({
//     name: 'Mutation',
//     description: 'This is a mutation query',
//     fields: {
//         addStudent: {
//             type: StudentType,
//             args: {
//                 firstName: { type: new GraphQLNonNull(GraphQLString) },
//                 lastName: { type: new GraphQLNonNull(GraphQLString) },
//                 birthDate: { type: new GraphQLNonNull(GraphQLString) },
//                 hobbies: { type: new GraphQLNonNull(GraphQLString) },
//                 photo: { type: new GraphQLNonNull(GraphQLString) }
//             },
//             resolve(parent, args) {
//                 // let student = new Author({
//                 //     name: args.name,
//                 //     age: args.age
//                 // })
//                 // return author.save()
//             }
//         },
//         editStudent: {

//         },
//         deleteStudent: {

//         }
//     }
// });

module.exports = new GraphQLSchema({
    query: Query
});

