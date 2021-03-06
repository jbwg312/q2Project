module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/brew_development',
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }
}
