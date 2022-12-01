import { Middleware } from '../../deps.ts';
import dbconnect from './middleware/dbconnect.ts';
import error from './middleware/error.ts';
import proxy from './middleware/proxy.ts';
import notFound from './404/handler.ts';
import router from './router.ts';

const routes: Middleware = router.routes();
const allowedMethods: Middleware = router.allowedMethods();

export default {
    error,
    dbconnect,
    proxy,
    routes,
    allowedMethods,
    notFound,
}