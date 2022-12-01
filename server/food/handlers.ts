import { RouteParams, Response } from "../../deps.ts";
import Food from './model.ts'

export async function getFoods({ response } : { response: Response }) {
    const foods: object[] = await Food.findAll({});
    response.body = { foods };
};

export async function getFood({ params, response } : { params: RouteParams, response: Response }) {
    const foodId: string|undefined = params.id;
    if (!foodId) {
        response.status = 400;
        response.body = { msg: "Invalid food id" };
        return;
    }
    const food: object|undefined = await Food.findById(foodId);
    if (!food) {
        response.status = 404;
        response.body = { msg: `Food with ID ${foodId} not found` };
        return;
    }
    response.body = { food };
}