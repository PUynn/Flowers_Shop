import { createClient } from '@supabase/supabase-js';
import { env } from './env.js';

if (!env.supabaseUrl || !env.supabaseKey) {
  throw new Error('SUPABASE_URL and SUPABASE_KEY must be defined in environment variables.');
}

export const supabase = createClient(env.supabaseUrl, env.supabaseKey);
