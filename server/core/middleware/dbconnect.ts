import { dso } from '../../../deps.ts';
import { DB_NAME, DB_HOST, DB_PORT, DB_USER, DB_PASSWORD } from '../../../config.ts';

export default async ({ response } : { response: any }, next : () => any) => {
    const config: object = {
		hostname: DB_HOST,
		port: DB_PORT,
		username: DB_USER,
		password: DB_PASSWORD,
		db: DB_NAME,
	};
	await dso.connect(config);
	await next();
};