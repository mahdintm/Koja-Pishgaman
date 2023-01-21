const { createPool } = require('mysql2')
let config = require('../../nuxt.config.js')
const pool_Main = createPool({
  host: config.default.env.Host_MYSQL,
  user: config.default.env.Username_MYSQL,
  password: config.default.env.Password_MYSQL,
  database: config.default.env.Database_MYSQL_Main,
  port: config.default.env.Port_MYSQL,
})

pool_Main.on('connected', () => {
  console.log('Connection')
})
export async function sql(sql_command, ...args) {
  try {
    args = [...args]
    const [rows_Main, fields_Main] = await pool_Main
      .promise()
      .query(sql_command, args)

    return rows_Main
  } catch (error) {
    console.log(error)
  }
}
