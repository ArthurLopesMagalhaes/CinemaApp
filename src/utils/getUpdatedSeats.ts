import { letterToNumber } from "./letterToNumber";

type seatsArrangement = {
  id: string;
  name: string;
  status: "available" | "occupied" | "chosen";
}[][];

export const getUpdatedSeats = (
  seatsArrangement: seatsArrangement,
  selectedSeats: string[]
) => {
  const newSeatsArrangement = [...seatsArrangement];
  selectedSeats.forEach((seat) => {
    const column = Number(seat.slice(1)) - 1;
    newSeatsArrangement[column][letterToNumber[seat[0]]].status = "occupied";
  });
  return newSeatsArrangement;
};
