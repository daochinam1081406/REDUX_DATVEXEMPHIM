import React from "react";
import SeatList from "./SeatList";
import Tickets from "./Tickets";
import data from "./data.json";

export default function FilmTicket() {
  return (
    <div className="container homepage">
      <h1 className="main-font">Đặt vé xe phim cyberlearn.vn</h1>
      <div className="row">
        <div className="col-12 col-md-6">
          <SeatList seats={data} />
        </div>
        <div className="col-12 col-md-6">
          <Tickets />
        </div>
      </div>
    </div>
  );
}
