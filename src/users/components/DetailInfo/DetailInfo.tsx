import React, { ReactNode } from "react";
import "./DetailInfo.scss";

type Props = {
  icon: ReactNode;
  body: {
    type: string;
    value: string | string[];
  };
  title: string;
};

export const DetailInfo: React.FC<Props> = ({ icon, body, title }) => (
  <div className="info-block">
    <span className="icon">{icon}</span>
    <div className="info__body">
      {body.type === "text" && <p>{body.value}</p>}
      {body.type === "email" && (
        <a href={`mailto:${body.value}`}>{body.value}</a>
      )}
      {body.type === "tel" && <a href={`tel:${body.value}`}>{body.value}</a>}
      {body.type === "listText" && Array.isArray(body.value) ? (
        body.value.map((item: string) => <p key={item}>{item}</p>)
      ) : (
        <p>{body.value}</p>
      )}
      {body.type === "link" && (
        <a href={`https://${body.value}`} target="_blank" rel="noreferrer">
          {body.value}
        </a>
      )}
      <span className="info__title">{title}</span>
    </div>
  </div>
);
