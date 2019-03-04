import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
    GraphQLSchema,
    GraphQLNonNull
} from 'graphql';

import Db from './db';

const StudentType = new GraphQLObjectType({
    name: 'Student',
    description: 'This represents a Student',
    fields: () => {
        return {
            id: {
                type: GraphQLInt,
                resolve(student) {
                    return student.id
                }
            },
            firstName: {
                type: GraphQLString,
                resolve(student) {
                    return student.firstName
                }
            },
            lastName: {
                type: GraphQLString,
                resolve(student) {
                    return student.lastName
                }
            },
            birthDate: {
                type: GraphQLString,
                resolve(student) {
                    return student.birthDate
                }
            },
            hobbies: {
                type: GraphQLString,
                resolve(student) {
                    return student.hobbies
                }
            },
            photo: {
                type: GraphQLString,
                resolve(student) {
                    return student.photo
                }
            },
        }
    }
});

const Query = new GraphQLObjectType({
    name: 'Query',
    description: 'This is a root query',
    fields: () => {
        return {
            students: {
                type: new GraphQLList(StudentType),
                resolve(root, args) {
                    return Db.models.student.find({});
                }
            }
        }
    }
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

const Schema = new GraphQLSchema({
    query: Query
});

export default Schema;
