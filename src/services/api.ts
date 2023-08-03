import { supabase } from "./supabase";

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
};
