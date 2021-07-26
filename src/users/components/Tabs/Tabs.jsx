import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

import { Posts } from "posts";
import { Todos } from "todos";
import { Albums } from "albums";

import "./Tabs.scss";

export const Tabs = () => {
  const { id } = useParams();
  const [tab, setTab] = useState("Posts");

  const onTabClick = (e) => {
    setTab(e.target.textContent);
  };

  return (
    <>
      <ul className="tabs__control">
        <li onClick={onTabClick} className={tab === "Posts" ? "active" : ""}>
          Posts
        </li>
        <li onClick={onTabClick} className={tab === "Todos" ? "active" : ""}>
          Todos
        </li>
        <li onClick={onTabClick} className={tab === "Albums" ? "active" : ""}>
          Albums
        </li>
      </ul>
      {tab === "Posts" && <Posts userId={id} />}
      {tab === "Todos" && <Todos userId={id} />}
      {tab === "Albums" && <Albums userId={id} />}
    </>
  );
};
