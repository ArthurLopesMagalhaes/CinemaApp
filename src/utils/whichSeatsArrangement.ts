type seatsArrangement = {
  id: string;
  name: string;
  status: "available" | "occupied" | "chosen";
}[][];

type SessionsData = {
  created_at: string;
  date_and_time: string;
  id: string;
  movie_id: string;
  seats_arrangement: seatsArrangement;
}[];

export const whichSeatsArrangement = (
  sessionsData: SessionsData,
  selectedDateAndTime: string
): seatsArrangement => {
  let selectedSeatsArrangement: seatsArrangement = [];

  sessionsData.forEach((session) => {
    if (session.date_and_time === selectedDateAndTime) {
      return (selectedSeatsArrangement = session.seats_arrangement);
    }
  });
  return selectedSeatsArrangement;
};
