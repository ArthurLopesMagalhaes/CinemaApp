export type TicketType = "Adult" | "Student";

type TicketTypeProps = {
  type: TicketType;
  price: number;
};

export const ticketType: TicketTypeProps[] = [
  { type: "Adult", price: 80 },
  { type: "Student", price: 40 },
];
