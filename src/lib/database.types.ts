export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      movies: {
        Row: {
          cast: string[];
          certificate: string;
          description: string;
          director: string;
          genres: string[];
          id: string;
          image_url: string;
          runtime: string;
          title: string;
        };
        Insert: {
          cast: string[];
          certificate?: string;
          description?: string;
          director: string;
          genres: string[];
          id?: string;
          image_url: string;
          runtime?: string;
          title: string;
        };
        Update: {
          cast?: string[];
          certificate?: string;
          description?: string;
          director?: string;
          genres?: string[];
          id?: string;
          image_url?: string;
          runtime?: string;
          title?: string;
        };
        Relationships: [];
      };
      orders: {
        Row: {
          created_at: string;
          id: string;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          id?: string;
          user_id: string;
        };
        Update: {
          created_at?: string;
          id?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "orders_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      sessions: {
        Row: {
          created_at: string;
          date_and_time: string;
          id: string;
          movie_id: string;
          seats_arrangement: {
            id: string;
            name: string;
            status: "available" | "occupied" | "chosen";
          }[][];
        };
        Insert: {
          created_at?: string;
          date_and_time: string;
          id?: string;
          movie_id: string;
          seats_arrangement: {
            id: string;
            name: string;
            status: "available" | "occupied" | "chosen";
          }[][];
        };
        Update: {
          created_at?: string;
          date_and_time?: string;
          id?: string;
          movie_id?: string;
          seats_arrangement?: {
            id: string;
            name: string;
            status: "available" | "occupied" | "chosen";
          }[][];
        };
        Relationships: [
          {
            foreignKeyName: "sessions_movie_id_fkey";
            columns: ["movie_id"];
            isOneToOne: false;
            referencedRelation: "movies";
            referencedColumns: ["id"];
          },
        ];
      };
      tickets: {
        Row: {
          id: string;
          movie_id: string;
          order_id: string;
          seat_position: string;
          session_id: string;
          status: string;
          ticket_type: string;
          user_id: string;
        };
        Insert: {
          id?: string;
          movie_id: string;
          order_id: string;
          seat_position: string;
          session_id: string;
          status?: string;
          ticket_type?: string;
          user_id: string;
        };
        Update: {
          id?: string;
          movie_id?: string;
          order_id?: string;
          seat_position?: string;
          session_id?: string;
          status?: string;
          ticket_type?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "tickets_movie_id_fkey";
            columns: ["movie_id"];
            isOneToOne: false;
            referencedRelation: "movies";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "tickets_order_id_fkey";
            columns: ["order_id"];
            isOneToOne: false;
            referencedRelation: "orders";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "tickets_session_id_fkey";
            columns: ["session_id"];
            isOneToOne: false;
            referencedRelation: "sessions";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "tickets_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      users: {
        Row: {
          email: string;
          id: string;
          name: string;
          role: string;
        };
        Insert: {
          email: string;
          id: string;
          name: string;
          role?: string;
        };
        Update: {
          email?: string;
          id?: string;
          name?: string;
          role?: string;
        };
        Relationships: [
          {
            foreignKeyName: "users_id_fkey";
            columns: ["id"];
            isOneToOne: true;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never;
