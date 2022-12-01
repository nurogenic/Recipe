import { Router } from "../../deps.ts";
import { getUsers, getUser } from "../user/handlers.ts";
import { getFoods, getFood } from "../food/handlers.ts";

const router = new Router();
export default router
    .get("/users", getUsers)
    .get("/users/:id", getUser)
    .get("/foods", getFoods)
    .get("/foods/:id", getFood)