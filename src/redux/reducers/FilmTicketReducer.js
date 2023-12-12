import { SELECT_SEAT, REMOVE_SEAT } from "../constants/filmTicketConstants";

const initialState = {
  selectedSeats: [],
  totalPrice: 0,
};

const filmTicketReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_SEAT: {
      const seat = action.payload;

      if (seat.booked) {
        // Handle logic for already booked seats if needed
        console.log("Seat is already booked");
        return state;
      }

      const updatedSelectedSeats = [...state.selectedSeats, seat];
      console.log(seat);

      const updatedTotalPrice = state.totalPrice + seat.price;

      return {
        ...state,
        selectedSeats: updatedSelectedSeats,
        totalPrice: updatedTotalPrice,
      };
    }
    case REMOVE_SEAT: {
      const seatToRemove = action.payload;
      const updatedSelectedSeats = state.selectedSeats.filter(
        (item) => item.name !== seatToRemove.name
      );
      const updatedTotalPrice = state.totalPrice - seatToRemove.price;

      return {
        ...state,
        selectedSeats: updatedSelectedSeats,
        totalPrice: updatedTotalPrice,
      };
    }
    default:
      return state;
  }
};

export default filmTicketReducer;
