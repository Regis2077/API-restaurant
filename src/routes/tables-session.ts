import { Router } from "express";
import { TablesSessionController } from "@/controllers/tables-session-controller";

const tablesSessionRoutes = Router();
const tablesSessionController = new TablesSessionController();

tablesSessionRoutes.post("/", tablesSessionController.create);
tablesSessionRoutes.get("/", tablesSessionController.index);
tablesSessionRoutes.put("/:id", tablesSessionController.update);

export { tablesSessionRoutes }