import "react-native-url-polyfill/auto";
import { createClient } from "@supabase/supabase-js";
import { Database } from "../lib/database.types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Config from "react-native-config";

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
