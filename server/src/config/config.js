module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'buyLocals',
        user: process.env.DB_USER || 'buyLocals',
        password: process.env.DB_PASSWORD || 'buyLocals',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './buyLocals.sqlite',
        }
    }
}
