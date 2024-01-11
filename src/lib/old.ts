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
          cast: string[] | null;
          certificate: string;
          description: string | null;
          director: string | null;
          genres: string[];
          id: string;
          image_url: string;
          runtime: string;
          title: string;
        };
        Insert: {
          cast?: string[] | null;
          certificate?: string;
          description?: string | null;
          director?: string | null;
          genres: string[];
          id?: string;
          image_url: string;
          runtime?: string;
          title: string;
        };
        Update: {
          cast?: string[] | null;
          certificate?: string;
          description?: string | null;
          director?: string | null;
          genres?: string[];
          id?: string;
          image_url?: string;
          runtime?: string;
          title?: string;
        };
        Relationships: [];
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
          seats_arrangement: {
            id: string;
            name: string;
            status: "available" | "occupied" | "chosen";
          }[][];
        };
        Relationships: [
          {
            foreignKeyName: "sessions_movie_id_fkey";
            columns: ["movie_id"];
            referencedRelation: "movies";
            referencedColumns: ["id"];
          },
        ];
      };
      tickets: {
        Row: {
          id: string;
          id_movie: string | null;
          id_user: string | null;
        };
        Insert: {
          id?: string;
          id_movie?: string | null;
          id_user?: string | null;
        };
        Update: {
          id?: string;
          id_movie?: string | null;
          id_user?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "tickets_id_movie_fkey";
            columns: ["id_movie"];
            referencedRelation: "movies";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "tickets_id_user_fkey";
            columns: ["id_user"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      users: {
        Row: {
          email: string | null;
          id: string;
          name: string | null;
        };
        Insert: {
          email?: string | null;
          id: string;
          name?: string | null;
        };
        Update: {
          email?: string | null;
          id?: string;
          name?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "users_id_fkey";
            columns: ["id"];
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
