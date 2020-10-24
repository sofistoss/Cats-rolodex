import React from "react";
import "./card-style.css";

export const Card = (props) => (
  <div className="card-container">
    <img
      alt="monster"
      src={`https://robohash.org/${props.monsters.id}?set=set4`}
    />
    <h2>{props.monsters.name}</h2>
    <p>{props.monsters.email}</p>
  </div>
);
