import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://qzhtmacmbbnjeyqaakih.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF6aHRtYWNtYmJuamV5cWFha2loIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4OTg0NDQsImV4cCI6MjA2MDQ3NDQ0NH0.LX5kFBkla-cHY6jxGaSwCfefO36lQXMZMnHdHbV66x4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
