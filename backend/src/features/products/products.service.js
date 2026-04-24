import { AppError } from '../../common/errors/AppError.js';
import { findAllProducts, findProductById } from './products.repository.js';

export async function getProductsService() {
  return findAllProducts();
}

export async function getProductByIdService(id) {
  try {
    return await findProductById(id);
  } catch (error) {
    throw new AppError('Product not found', 404);
  }
}
