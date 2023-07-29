import "react-native-url-polyfill/auto";
import { createClient } from "@supabase/supabase-js";
import Config from "react-native-config";

export const supabase = createClient(
  Config.SUPABASE_URL!,
  Config.SUPABASE_KEY!,
  {
    auth: {
      persistSession: false,
    },
  }
);
