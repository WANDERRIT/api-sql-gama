import express from "express";
import AutomobileController from "./controllers/autoControllers.js"

const routes = express.Router();


routes.post("/carros", AutomobileController.create);
routes.get("/carros", AutomobileController.getAll);
routes.get("carros/:id", AutomobileController.getById);
routes.put("/carros/:id", AutomobileController.update);
routes.delete("/carros:id", AutomobileController.delete);
export { routes as default };