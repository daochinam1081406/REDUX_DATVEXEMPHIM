import React from "react";
import { useSelector } from "react-redux";
import SeatItem from "./SeatItem";

export default function SeatList({ seats }) {
  // Danh sách những ghế đang được chọn
  const selectedSeats = useSelector((state) => {
    return state.filmTicket.selectedSeats;
  });

  return (
    <>
      <div className="hinhthang-gold"></div>
      <table className="">
        <thead>
          <tr>
            <th className="main-font"></th>
            {[...Array(12).keys()].map((index) => (
              <th className="main-font" key={index + 1}>
                {index + 1}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {seats.map((row) => (
            <tr key={row.row} className="main-font">
              <td className="main-font">{row.row}</td>
              {row.seats.map((seat) => {
                const seatNumber = seat.name;
                const found = selectedSeats.find((item) => item.id === seat.id);

                return (
                  <td key={seat.name} className="main-font">
                    <SeatItem
                      seat={{ ...seat, name: seatNumber }}
                      isSelected={!!found}
                    />
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
