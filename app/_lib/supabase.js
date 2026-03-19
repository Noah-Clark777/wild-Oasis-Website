import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL?.trim();
const supabaseKey = process.env.SUPABASE_KEY?.trim();

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    "Missing Supabase environment variables: SUPABASE_URL and SUPABASE_KEY are required. " +
      "Set them in .env.local for local dev and in Netlify environment variables for deployment.",
  );
}

export const supabase = createClient(supabaseUrl, supabaseKey);
