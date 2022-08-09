const DATABASE_NAME=process.env.DB_NAME;
const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;
const HOST=process.env.DB_HOST;
const  DIALECT='mysql';
module.exports = {
    DATABASE_NAME: DATABASE_NAME,
    USERNAME:USERNAME,
    PASSWORD:PASSWORD,
    HOST:HOST,
    DIALECT:DIALECT
}