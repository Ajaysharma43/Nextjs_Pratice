const { Pool } = require("pg");

const pool = new Pool({
    connectionString : process.env.DATABASE_URL
})

export const client = pool.connect()