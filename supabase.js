
// supabase.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://tjxwmtewiphampqghygc.supabase.co'; // <-- Replace
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRqeHdtdGV3aXBoYW1wcWdoeWdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc5MTU1NjIsImV4cCI6MjA3MzQ5MTU2Mn0.RgkJkJJCPGQkSFw9QYOgBrdUEXR3eGIn-UYOjfGE_sg'; // <-- Replace
export const supabase = createClient(supabaseUrl, supabaseKey);
document.getElementById('clear-btn').addEventListener('click', async () => {
  if (!confirm('Are you sure you want to delete ALL attendance data?')) return;

  // Delete all rows
  const { error } = await supabase.from('attendance').delete().neq('id', 0);

  const status = document.getElementById('clear-status');
  if (error) {
    console.error(error);
    status.textContent = 'Error clearing data: ' + error.message;
  } else {
    status.textContent = 'All attendance data cleared.';
    loadAttendance(); // refresh the table
  }
});

