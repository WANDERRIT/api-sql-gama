import express from "express";
import routes from "./Routes.js";
import db from "./config/dbconfig.js"; //importando as configs de dbconfig.js


const app = express();

app.use(express.json());
app.use(routes);

db.sync(()=> console.log(`conectado ao banco: ${process.env.DB_NAME}`));


app.listen(3306, ()=> console.log("Servidor rodando na porta 3306"));
