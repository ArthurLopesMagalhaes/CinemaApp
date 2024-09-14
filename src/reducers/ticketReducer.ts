type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum Types {
  ADD_TICKET = 'ADD_TICKET',
  REMOVE_TICKET = 'REMOVE_TICKET',
}

type TicketType = {
  id: string;
  type: string;
};

type TicketPayload = {
  [Types.ADD_TICKET]: {
    id: string;
    type: string;
  };
  [Types.REMOVE_TICKET]: {
    id: string;
  };
};

export type TicketActions =
  ActionMap<TicketPayload>[keyof ActionMap<TicketPayload>];

export const ticketReducer = (state: TicketType[], action: TicketActions) => {
  switch (action.type) {
    case Types.ADD_TICKET:
      return {
        ...state,
        ticket: {
          id: action.payload.id,
          price: action.payload.type,
        },
      };
    case Types.REMOVE_TICKET:
      return state.filter((item) => action.payload.id !== item.id);

    default:
      return state;
  }
};
