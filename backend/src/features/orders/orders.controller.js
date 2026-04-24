import { createOrderService, getOrdersService } from './orders.service.js';

export async function createOrder(req, res, next) {
  try {
    const order = await createOrderService(req.body);
    return res.status(201).json(order);
  } catch (error) {
    return next(error);
  }
}

export async function getOrders(req, res, next) {
  try {
    const orders = await getOrdersService();
    return res.json(orders);
  } catch (error) {
    return next(error);
  }
}
