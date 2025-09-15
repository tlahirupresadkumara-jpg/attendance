
// supabase.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://tjxwmtewiphampqghygc.supabase.co'; // <-- Replace
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRqeHdtdGV3aXBoYW1wcWdoeWdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc5MTU1NjIsImV4cCI6MjA3MzQ5MTU2Mn0.RgkJkJJCPGQkSFw9QYOgBrdUEXR3eGIn-UYOjfGE_sg'; // <-- Replace
export const supabase = createClient(supabaseUrl, supabaseKey);
