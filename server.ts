import { Application } from './deps.ts';
import { APP_HOST, APP_PORT  } from './config.ts';
import { run } from './server/index.ts'
const host : string = APP_HOST;
const port : number = APP_PORT;
run(new Application(), { host, port });