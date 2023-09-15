import db from "../config/dbconfig.js"
import { Sequelize } from "sequelize";


const AutomobileDetails = db.define("AutomobileDetails", {
    id:{
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
    },
    
    kilometer:{
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull:false,
    },
    
    color:{
    type: Sequelize.STRING(20),
    allowNull:false,
    }
    
    })
    
    export default AutomobileDetails;