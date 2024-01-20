import { ticketPrice } from "./ticketType";

import { TicketType } from "@stores/cart";

export const calculateCartAmountPrice = (tickets: TicketType[]) => {
  let amount = 0;
  tickets.forEach((ticket) => {
    amount += ticketPrice[ticket.type];
  });

  return amount;
};
