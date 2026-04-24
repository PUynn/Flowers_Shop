import { supabase } from '../../config/supabase.js';

export async function findAllProducts() {
  const { data, error } = await supabase.from('products').select('*');
  if (error) throw error;
  return data;
}

export async function findProductById(id) {
  const { data, error } = await supabase.from('products').select('*').eq('id', id).single();
  if (error) throw error;
  return data;
}
