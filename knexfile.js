module.exports = {
  development: {
      client: 'pg',
      connection: 'postgres://localhost/smart-projects'
  },
  production: {
      client: 'pg',
      connection: process.env.DATABASE_URL
  }
}