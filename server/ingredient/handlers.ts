import { RouteParams, Response } from "../../deps.ts";
import Ingredient from './model.ts'

export async function getIngredients({ response } : { response: Response }) {
    const ingredients: object[] = await Ingredient.findAll({});
    response.body = { ingredients };
};

export async function getIngredient({ params, response } : { params: RouteParams, response: Response }) {
    const ingredientId: string|undefined = params.id;
    if (!ingredientId) {
        response.status = 400;
        response.body = { msg: "Invalid ingredient id" };
        return;
    }
    const ingredient: object|undefined = await Ingredient.findById(ingredientId);
    if (!ingredient) {
        response.status = 404;
        response.body = { msg: `Ingredient with ID ${ingredientId} not found` };
        return;
    }
    response.body = { ingredient };
}