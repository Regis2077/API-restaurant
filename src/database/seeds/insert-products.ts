import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex("products").del();

    await knex("products").insert([
        { name: "Pizza", price: 100 },
        { name: "Hamburguer", price: 50 },
        { name: "Refrigerante", price: 10 },
        { name: "Sorvete", price: 20 },
        { name: "Salada", price: 30 },
        { name: "Batata frita", price: 15 },
        { name: "Coca-cola", price: 8 },
    ]);
};
