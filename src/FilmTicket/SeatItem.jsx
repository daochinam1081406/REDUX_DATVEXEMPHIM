import React from "react";
import cn from "classnames";
import { useDispatch } from "react-redux";
import { selectSeat } from "../redux/slices/filmTicketSlice";

export default function SeatItem({ seat, isSelected }) {
  const dispatch = useDispatch();

  const handleSelect = () => {
    dispatch(selectSeat(seat));
  };

  return (
    <button
      className={cn("btn ", {
        "btn-danger": seat.booked,
        "btn-success": isSelected,
        "btn-secondary": !seat.booked && !isSelected,
      })}
      disabled={seat.booked}
      onClick={handleSelect}
    >
      {seat.name}
    </button>
  );
}
