import { Router } from 'express';
import { getProductById, getProducts } from './products.controller.js';

const productsRouter = Router();

productsRouter.get('/', getProducts);
productsRouter.get('/:id', getProductById);

export default productsRouter;
