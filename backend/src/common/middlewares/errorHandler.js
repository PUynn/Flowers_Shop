import { AppError } from '../errors/AppError.js';

export function errorHandler(err, req, res, next) { // eslint-disable-line no-unused-vars
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ error: err.message });
  }

  console.error('Unhandled error:', err);
  return res.status(500).json({ error: 'Internal server error' });
}
