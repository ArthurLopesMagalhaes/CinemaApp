import Config from 'react-native-config';
import 'react-native-url-polyfill/auto';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { Database } from '../lib/database.types';

import { createClient } from '@supabase/supabase-js';

export const supabase = createClient<Database>(
  Config.SUPABASE_URL as string,
  Config.SUPABASE_KEY as string,
  {
    auth: {
      storage: AsyncStorage,
      autoRefreshToken: true,
      persistSession: true,
    },
  },
);
