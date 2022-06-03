const dotenv = required('dotenv');

dotenv.config({
    path: process.env.NODE_ENV,
})

module.exports = {
    database: {
        host: process.env.BD_HOST,
        port: process.env.BD_PORT,
        username: process.env.BD_USER,
        password: process.env.BD_PASS,
        collection: process.env.BD_COLLECTION,
    }
}