import { Router } from 'express';
import { createOrder, getOrders } from './orders.controller.js';

const ordersRouter = Router();

ordersRouter.get('/', getOrders);
ordersRouter.post('/', createOrder);

export default ordersRouter;
