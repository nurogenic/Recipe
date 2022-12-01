import { Application } from '../deps.ts';
import middleware from "./core/middleware.ts";

export async function run(application : Application, { host, port } : { host: string; port: number; }) {
    Object.values(middleware).forEach(x => application.use(x));

    console.log(`Listening on ${port}...`);
    return await application.listen(`${host}:${port}`);
}