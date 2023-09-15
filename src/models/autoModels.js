import db from "../config/dbconfig.js"
import { Sequelize } from "sequelize";

const Automobile = db.define("Automobile", {
    id:{
        type: Sequelize.INTEGER.UNSIGNED,
            primaryKey: true, // NOT NULL E UNIQUE
            autoIncrement: true,
    },
    
    brand:{
        type: Sequelize.STRING(200),
        allowNull: false,
    },
    
    year:{
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
    },
    
    plate: {
        type: Sequelize.STRING(7),
        allowNull: false,
    },
    
    })
    
    export default Automobile;