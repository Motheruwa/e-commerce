import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://irbcvfqzokjztatiugas.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlyYmN2ZnF6b2tqenRhdGl1Z2FzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM0MzkyNTIsImV4cCI6MTk5OTAxNTI1Mn0.Ou4AB5WrfimFOB18TiugeCc9jStODxj_IH3-JOwKDV4"
export  const supabase = createClient(supabaseUrl, supabaseKey)