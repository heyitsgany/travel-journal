import React from "react";

import pinIcon from "../images/pin_icon.svg";

export default function Card(props) {
  console.log(props);

  return (
    <section className="card">
      <img
        src={props.entry.imageUrl}
        alt={props.entry.title}
        className="card__image"
      />
      <div className="card__content">
        <div className="card__location">
          <img
            src={pinIcon}
            alt=""
            aria-hidden="true"
            className="card__location--icon"
          />
          <span className="card__location--location">
            {props.entry.location}
          </span>
          <a
            href={props.entry.googleMapsUrl}
            target="_blank"
            className="card__location--link"
          >
            View on Google Maps
          </a>
        </div>
        <h2 className="card__title">{props.entry.title}</h2>
        <p className="card__dates">
          {props.entry.startDate} - {props.entry.endDate}
        </p>
        <p className="card__description">{props.entry.description}</p>
      </div>
    </section>
  );
}
