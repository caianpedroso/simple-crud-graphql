const express = require('express');
const graphqlHTTP =  require('express-graphql');
const { buildSchema } = require('graphql');
const cors = require('cors');
const db = require('./db')

const app = express();
const port = 4000;
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World 2!')
})

const schema =  buildSchema(`
  type User {
    id: String
    name: String
    job_title: String
    email: String
  }
  
  type Query {
    getUsers: [User]
    getUserInfo(id: Int) : User
  }
  
  type Mutation {
    updateUser(id: Int, name: String, email: String, job_title: String) : Boolean
    createUser(name: String, email: String, job_title: String) : Boolean
    deleteUser(id: Int) : Boolean
  }
`);

const root = {
  getUsers: (args, req) => db('users').then(data => data),
  getUserInfo: (args, req) => db('users').where('id', args.id).then(data => data[0]),
};

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
