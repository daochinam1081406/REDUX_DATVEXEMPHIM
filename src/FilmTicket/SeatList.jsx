import React from "react";
import { useSelector } from "react-redux";
import SeatItem from "./SeatItem";

export default function SeatList({ seats }) {
  const selectedSeats = useSelector((state) => state.filmTicket.selectedSeats);

  return (
    <>
      <div className="hinhthang-gold">màn hình</div>
      <table className="">
        <thead>{/* ... */}</thead>
        <tbody>
          {seats.map((row) => (
            <tr key={row.row} className="main-font">
              <td className="main-font">{row.row}</td>
              {row.seats.map((seat) => {
                const seatNumber = seat.name;
                const isSelected = selectedSeats.some(
                  (selectedSeat) => selectedSeat.name === seatNumber
                );

                return (
                  <td key={seat.name} className="main-font">
                    <SeatItem seat={seat} isSelected={isSelected} />
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
