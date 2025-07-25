import { NextFunction, Request, Response } from "express";
import { knex } from "../database/knex";

class TablesController {
  async index(request: Request, response: Response, next: NextFunction) {

    try {
      const tables = await knex<TablesRepository>("tables").select().orderBy("table_number");
      return response.json(tables);
    } catch (error) {
      next(error);
    }
  }
}

export { TablesController };