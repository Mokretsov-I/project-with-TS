import React from "react";
import "./DetailInfo.scss";

export const DetailInfo = ({ icon, body, title }) => (
  <div className="info-block">
    <span className="icon">{icon}</span>
    <div className="info__body">
      {body.type === "text" && <p>{body.value}</p>}
      {body.type === "email" && (
        <a href={`mailto:${body.value}`}>{body.value}</a>
      )}
      {body.type === "tel" && <a href={`tel:${body.value}`}>{body.value}</a>}
      {body.type === "listText" &&
        body.value.map((item, i) => <p key={i}>{item}</p>)}
      {body.type === "link" && (
        <a href={`https://${body.value}`} target="_blank" rel="noreferrer">
          {body.value}
        </a>
      )}
      <span className="info__title">{title}</span>
    </div>
  </div>
);
