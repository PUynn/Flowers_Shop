import { getProductByIdService, getProductsService } from './products.service.js';

export async function getProducts(req, res, next) {
  try {
    const products = await getProductsService();
    return res.json(products);
  } catch (error) {
    return next(error);
  }
}

export async function getProductById(req, res, next) {
  try {
    const product = await getProductByIdService(req.params.id);
    return res.json(product);
  } catch (error) {
    return next(error);
  }
}
