import React, {
  Dispatch,
  PropsWithChildren,
  createContext,
  useReducer,
} from "react";
import { TicketActions, ticketReducer } from "../reducers/ticketReducer";

export type TicketType = {
  id: string;
  type: string;
};

type InitialStateType = {
  tickets: TicketType[];
};

const initialState: InitialStateType = {
  tickets: [{ id: "", type: "" }],
};

export const SessionContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<TicketActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = ({ tickets }: InitialStateType, action: TicketActions) => ({
  tickets: ticketReducer(tickets, action),
});

export const SessionProvider: React.FC<PropsWithChildren> = (props) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <SessionContext.Provider value={{ state, dispatch }}>
      {props.children}
    </SessionContext.Provider>
  );
};
