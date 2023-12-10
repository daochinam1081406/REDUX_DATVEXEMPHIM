import { SELECT_SEAT, REMOVE_SEAT } from "../constants/filmTicketConstants";

// action creators
export const selectSeat = (seat) => {
  return {
    type: SELECT_SEAT,
    payload: seat,
  };
};

export const removeSeat = (seat) => {
  return {
    type: REMOVE_SEAT,
    payload: seat,
  };
};
