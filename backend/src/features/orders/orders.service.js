import { AppError } from '../../common/errors/AppError.js';
import { findAllOrders, insertOrder } from './orders.repository.js';

export async function createOrderService(payload) {
  const { items, customer } = payload;
  if (!items || !Array.isArray(items) || items.length === 0) {
    throw new AppError('No items in order', 400);
  }

  return insertOrder({ items, customer });
}

export async function getOrdersService() {
  return findAllOrders();
}
