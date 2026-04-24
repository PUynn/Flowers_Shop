import { supabase } from '../../config/supabase.js';

export async function insertOrder(orderPayload) {
  const { data, error } = await supabase.from('orders').insert([orderPayload]).select().single();
  if (error) throw error;
  return data;
}

export async function findAllOrders() {
  const { data, error } = await supabase.from('orders').select('*').order('created_at', { ascending: false });
  if (error) throw error;
  return data;
}
