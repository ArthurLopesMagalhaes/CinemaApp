import { SessionsData } from "../screens/Session";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      AboutMovie: { movieId: string };
      Session: { movieId: string };
      Ticket: { ticketInfo: TicketInfo };
      SignIn: undefined;
      SignUp: undefined;
      Profile: undefined;
      Cart: { sessionData: SessionsData };
    }
  }
}
