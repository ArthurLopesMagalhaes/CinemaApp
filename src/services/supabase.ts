import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
import Config from "react-native-config";
import { Database } from "../lib/database.types";

export const supabase = createClient<Database>(
  Config.SUPABASE_URL!,
  Config.SUPABASE_KEY!,
  {
    auth: {
      storage: AsyncStorage,
      autoRefreshToken: true,
      persistSession: true,
    },
  }
);
