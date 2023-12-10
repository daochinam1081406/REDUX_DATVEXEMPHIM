import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeSeat } from "../redux/slices/filmTicketSlice";

export default function Tickets() {
  const selectedSeats = useSelector((state) => state.filmTicket.selectedSeats);
  const totalPrice = useSelector((state) => state.filmTicket.totalPrice);
  const dispatch = useDispatch();

  const handleRemove = (seat) => {
    dispatch(removeSeat(seat));
  };

  return (
    <div>
      <h3 className="sub-font">Danh sách ghế đang chọn</h3>
      {selectedSeats.map((seat) => (
        <div
          key={seat.id}
          className="d-flex justify-content-between mb-2 sub-font"
        >
          <span className="sub-font">
            {`Mã ghế: ${seat.name} - Giá: ${seat.price}$`}{" "}
          </span>
          <button className="btn btn-danger" onClick={() => handleRemove(seat)}>
            Hủy
          </button>
        </div>
      ))}
      <div className="d-flex justify-content-between">
        <strong className="sub-font">Tổng tiền:</strong>
        <span className="sub-font">{`${totalPrice}$`}</span>
      </div>
    </div>
  );
}
