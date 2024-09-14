type Cart = {
  id: string;
  type: 'Adult' | 'Student';
};

export const getTicketsIdFromCart = (cart: Cart[]) => {
  const ticketsId: string[] = [];
  cart.forEach((item) => {
    ticketsId.push(item.id);
  });
  return ticketsId;
};
