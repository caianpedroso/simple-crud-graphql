const { join } = require('path');

const BASE_PATH = join(__dirname);

module.exports = {
  docker: {
    client: 'mysql',
    version: '5.7',
    connection: {
      host : 'localhost',
      port : 3306,
      user : 'root',
      password : 'firt_project_graphql',
      database : 'db_firt_project_graphql'
    },
    migrations: {
      directory: join(BASE_PATH, 'migrations'),
    },
  }
}
