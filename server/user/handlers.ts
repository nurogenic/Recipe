import { RouteParams, Response } from "../../deps.ts";
import User from './model.ts'

export async function getUsers({ response } : { response: Response }) {
    const users: object[] = await User.findAll({});
    response.body = { users };
};

export async function getUser({ params, response } : { params: RouteParams, response: Response }) {
    const userId: string|undefined = params.id;
    if (!userId) {
        response.status = 400;
        response.body = { msg: "Invalid user id" };
        return;
    }
    const user: object|undefined = await User.findById(userId);
    if (!user) {
        response.status = 404;
        response.body = { msg: `User with ID ${userId} not found` };
        return;
    }
    response.body = { user };
}