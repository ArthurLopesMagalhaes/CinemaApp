import { create } from "zustand";
import { Database } from "../lib/database.types";

type MovieType = Database["public"]["Tables"]["movies"]["Row"];

type State = {
  movie: MovieType;
  setMovie: (user: MovieType) => void;
};

export const useMovieStore = create<State>((set) => ({
  movie: {
    cast: [""],
    certificate: "",
    description: "",
    director: "",
    genres: [""],
    id: "",
    image_url: "",
    runtime: "",
    title: "",
  },
  setMovie: (movie) => set({ movie }),
}));
