import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  'https://lftdvkgxywrxblmulibz.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxmdGR2a2d4eXdyeGJsbXVsaWJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYwMTg4MjUsImV4cCI6MjA3MTU5NDgyNX0.zw7TfyV4muBKhFvgJOQlVjUuu-ONjSyw8ATUxJkgEDM'
);
//console.log( import.meta.env.VITE_SUPABASE_URL,import.meta.env.VITE_SUPABASE_ANON_KEY);
export default supabase;

