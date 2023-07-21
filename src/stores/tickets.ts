import { create } from "zustand";

type TicketType = {
  id: string;
  type: "Adult" | "Student";
};

type State = {
  tickets: TicketType[];
  addTicket: (ticket: TicketType) => void;
  removeTicket: (id: string) => void;
};

export const useTicketStore = create<State>((set) => ({
  tickets: [],
  addTicket: (ticket: TicketType) => {
    set((state) => {
      if (!state.tickets.includes({ id: ticket.id, type: "Adult" })) {
        return { tickets: [...state.tickets, ticket] };
      }
      return state;
    });
  },
  removeTicket: (id) => {
    set((state) => ({
      tickets: state.tickets.filter((item) => item.id !== id),
    }));
  },
}));
