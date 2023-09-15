import { Sequelize } from "sequelize"; // importar o sequelize
import dotenv from "dotenv"; // importar o dotenv para localizar as variáveis de ambiente

dotenv.config();

// const env = require('dotenv').config()

// passar os dados do .env para as constantes
const dbname = process.env.DB_NAME;
const dbuser = process.env.DB_USER;
const dbpassword = process.env.DB_PASSWORD;
const dbhost = process.env.DB_HOST;

//passar os dados para o sequelizer
const sequelize = new Sequelize(dbname, dbuser, dbpassword, dbhost, {
dialect: "mysql",//tipo de banco de dados
host: dbhost, //host
})

export default sequelize;