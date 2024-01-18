import { TicketType } from "../stores/cart";
import { ticketPrice } from "./ticketType";

export const calculateCartAmountPrice = (tickets: TicketType[]) => {
  let amount = 0;
  tickets.forEach((ticket) => {
    amount += ticketPrice[ticket.type];
  });

  return amount;
};
