import { Client } from "deps";
import { DB_HOST, DB_PORT, DB_USER, DB_NAME } from "config";

class DB_Adapter {
    constructor() {
        
    }

    async connect() {
        return await new Client().connect({
            hostname: DB_HOST,
            username: DB_USER,
            password: DB_PASSWORD,
            port: DB_PORT,
            db: DB_NAME,
            // debug: false,
            // timeout: 
            // poolSize: 1,
            charset: 'utf-8'
        });
    }

    query() {
        const client = this.connect();
        return this.client
    }



}