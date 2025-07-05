//adicionar as rotas por arquivos

import { Router } from "express";
import { productsRoutes } from "./products-routes";
import { tablesRoutes } from "./tables-routes";
import { tablesSessionRoutes } from "./tables-session";
import { ordersRoutes } from "./orders-routes";

const routes = Router();

routes.use("/products", productsRoutes);
routes.use("/tables", tablesRoutes);
routes.use("/tables-session", tablesSessionRoutes);
routes.use("/orders", ordersRoutes)

export { routes };          