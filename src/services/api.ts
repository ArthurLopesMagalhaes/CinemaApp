import { Database } from "../lib/database.types";
import { Seat } from "../screens/Session/components/SeatsMap";
import { supabase } from "./supabase";

export type SeatsArrangementType =
  Database["public"]["Tables"]["sessions"]["Row"]["seats_arrangement"];

export const cineAPI = {
  getMovies: async () => {
    const { data: movies, error } = await supabase.from("movies").select("*");
    return { movies, error };
  },
  getMovieDetails: async (movieId: string) => {
    const { data: movies, error } = await supabase
      .from("movies")
      .select("*")
      .eq("id", movieId)
      .single();
    return { movies, error };
  },
  getSession: async (movieId: string) => {
    const { data: sessions, error } = await supabase
      .from("sessions")
      .select("*")
      .eq("movie_id", movieId);
    return { sessions, error };
  },
  updateSession: async (
    sessionId: string,
    newSeatsArrangement: SeatsArrangementType
  ) => {
    const { data, error } = await supabase
      .from("sessions")
      .update({
        seats_arrangement: newSeatsArrangement,
      })
      .eq("id", sessionId)
      .select();
  },
};
