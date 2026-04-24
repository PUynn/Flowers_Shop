import { Router } from 'express';
import productsRouter from '../features/products/products.routes.js';
import ordersRouter from '../features/orders/orders.routes.js';

const apiRouter = Router();

apiRouter.use('/products', productsRouter);
apiRouter.use('/orders', ordersRouter);

export default apiRouter;
