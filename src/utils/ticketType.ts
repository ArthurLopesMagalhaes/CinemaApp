export type TicketType = "Adult" | "Student";

export type TicketTypeProps = {
  type: TicketType;
  price: number;
};

export const ticketType: TicketTypeProps[] = [
  { type: "Adult", price: 18 },
  { type: "Student", price: 9 },
];

export const ticketPrice = {
  Adult: 18,
  Student: 9,
};
