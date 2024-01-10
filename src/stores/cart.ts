import { create } from "zustand";

export type TicketType = {
  id: string;
  type: "Adult" | "Student";
};

type CartType = {
  sessionId: string;
  tickets: TicketType[];
};

type State = {
  cart: CartType;
  addTicket: (sessionId: string, ticket: TicketType) => void;
  removeTicket: (ticketId: string) => void;
  clearCart: () => void;
};

export const useCartStore = create<State>((set) => ({
  cart: { sessionId: "", tickets: [] },
  addTicket: (sessionId: string, ticket: TicketType) => {
    set((state) => {
      if (state.cart.sessionId === "" || state.cart.sessionId !== sessionId) {
        return { cart: { sessionId, tickets: [ticket] } };
      }
      if (
        state.cart.sessionId === sessionId &&
        !state.cart.tickets.some((e) => e.id === ticket.id)
      ) {
        return {
          cart: { sessionId, tickets: [...state.cart.tickets, ticket] },
        };
      }
      return state;
    });
  },
  removeTicket: (ticketId) => {
    set((state) => ({
      cart: {
        sessionId: state.cart.sessionId,
        tickets: state.cart.tickets.filter((item) => item.id !== ticketId),
      },
    }));
  },
  clearCart: () => {
    set((state) => ({
      cart: { sessionId: "", tickets: [] },
    }));
  },
}));
