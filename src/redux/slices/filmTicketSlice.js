import { createSlice } from "@reduxjs/toolkit";

const filmTicketSlice = createSlice({
  name: "filmTicket",
  initialState: {
    selectedSeats: [],
    totalPrice: 0,
  },
  reducers: {
    selectSeat: (state, action) => {
      const seat = action.payload;

      if (seat.booked) {
        // Handle logic for already booked seats if needed
        return state;
      }

      const isSeatSelected = state.selectedSeats.some(
        (selectedSeat) => selectedSeat.name === seat.name
      );

      if (isSeatSelected) {
        // Seat is already selected, remove it
        const updatedSelectedSeats = state.selectedSeats.filter(
          (selectedSeat) => selectedSeat.name !== seat.name
        );
        const updatedTotalPrice = state.totalPrice - seat.price;

        return {
          ...state,
          selectedSeats: updatedSelectedSeats,
          totalPrice: updatedTotalPrice,
        };
      } else {
        // Seat is not selected, add it
        const updatedSelectedSeats = [...state.selectedSeats, seat];
        const updatedTotalPrice = state.totalPrice + seat.price;

        return {
          ...state,
          selectedSeats: updatedSelectedSeats,
          totalPrice: updatedTotalPrice,
        };
      }
    },
    removeSeat: (state, action) => {
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
    },
  },
});

export const { selectSeat, removeSeat } = filmTicketSlice.actions;
export default filmTicketSlice.reducer;
