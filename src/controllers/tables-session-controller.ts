import { Request, Response, NextFunction } from "express";
import { z } from "zod";
import { knex } from "@/database/knex";
import { AppError } from "@/utils/AppError";

class TablesSessionController {
  async create(request: Request, response: Response, next: NextFunction) {
    try {
      const bodySchema = z.object({
        table_id: z.number().int().positive(),
      })
      const { table_id } = bodySchema.parse(request.body);

      const session = await knex<TablesSessionRepository>("tables_session")
        .where({ table_id } )
        .orderBy("opened_at", "desc")
        .first();

      if(session && !session.closed_at) {
        throw new AppError("Table already has an open session");
      }


      await knex<TablesSessionRepository>("tables_session").insert({ table_id, opened_at: knex.fn.now() });

      return response.status(201).json()
    } catch (error) {
      next(error);
    }
  }

  async index(request: Request, response: Response, next: NextFunction) {
    try {
      const sessions = await knex<TablesSessionRepository>("tables_session")
        .orderBy("closed_at")

        return response.status(200).json(sessions)
    } catch (error) {
      next(error);
    }
  }

  async update(request: Request, response: Response, next: NextFunction) {
    try {

      const id = z
        .string()
        .transform((value) => Number(value))
        .refine((value) => !isNaN(value))
        .parse(request.params.id);

      const session = await knex<TablesSessionRepository>("tables_session")
        .where({ id })
        .first();

      if(!session) {
        throw new AppError("Session not found");
      }

      await knex<TablesSessionRepository>("tables_session")
        .update({ closed_at: knex.fn.now() })
        .where({ id });

      return response.json({ message: "Session closed successfully" });
    } catch (error) {
      next(error);
    }
  }
}

export { TablesSessionController }