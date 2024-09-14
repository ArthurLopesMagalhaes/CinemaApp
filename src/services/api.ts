import { Database } from '@lib/database.types';

import { supabase } from './supabase';

export type SeatsArrangementType =
  Database['public']['Tables']['sessions']['Row']['seats_arrangement'];

export const cineAPI = {
  signInUser: async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    return { data, error };
  },
  signUpUser: async (name: string, email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
        },
      },
    });
    return { data, error };
  },
  getUser: async () => {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .limit(1)
      .single();
    return { data, error };
  },
  getMovies: async () => {
    const { data: movies, error } = await supabase.from('movies').select('*');
    return { movies, error };
  },
  getMovieDetails: async (movieId: string) => {
    const { data: movies, error } = await supabase
      .from('movies')
      .select('*')
      .eq('id', movieId)
      .single();
    return { movies, error };
  },
  getSession: async (movieId: string) => {
    const { data: sessions, error } = await supabase
      .from('sessions')
      .select('*')
      .eq('movie_id', movieId);
    return { sessions, error };
  },
  updateSession: async (
    sessionId: string,
    newSeatsArrangement: SeatsArrangementType,
  ) => {
    const { data, error } = await supabase
      .from('sessions')
      .update({
        seats_arrangement: newSeatsArrangement,
      })
      .eq('id', sessionId)
      .select();
    return { data, error };
  },
  createOrder: async (userId: string) => {
    const { data, error } = await supabase
      .from('orders')
      .insert([{ user_id: userId }])
      .select();
    return { data, error };
  },
  createTicket: async (
    ticketData: {
      movie_id: string;
      user_id: string;
      seat_position: string;
      ticket_type: string;
      order_id: string;
      session_id: string;
    }[],
  ) => {
    const { data, error } = await supabase
      .from('tickets')
      .insert(ticketData)
      .select();

    return { data, error };
  },
  getTickets: async (userId: string, status?: string) => {
    const { data, error } = await supabase
      .from('tickets')
      .select(
        `
      *,
      movies (
        title,
        image_url
      ),
      sessions (
        date_and_time
      )
    `,
      )
      .order('status', { ascending: true })
      .eq('user_id', userId)
      .eq('status', status);
    return { data, error };
  },
  updateTicketStatus: async (ticketId: string) => {
    const { data, error } = await supabase
      .from('tickets')
      .update({ status: 'closed' })
      .eq('status', 'active')
      .eq('id', ticketId)
      .select();
    return { data, error };
  },
};
