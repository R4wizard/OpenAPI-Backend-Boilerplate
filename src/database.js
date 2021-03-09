import knex from 'knex'

import { DATABASE_HOST, DATABASE_PORT, DATABASE_USER, DATABASE_PASS, DATABASE_NAME } from '~/environment'

const database = knex({
  client: 'mysql',
  connection: {
    host: DATABASE_HOST,
    port: DATABASE_PORT,
    user: DATABASE_USER,
    password: DATABASE_PASS,
    database: DATABASE_NAME
  }
})

export default database
