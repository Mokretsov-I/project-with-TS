import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

import { Posts } from "posts";
import { Todos } from "todos";
import { Albums } from "albums";

import "./Tabs.scss";

export const Tabs: React.FC = () => {
  const { id } = useParams<{id: string}>();
  const [tab, setTab] = useState<string>("Posts");

  const onTabClick = (e:any) => {
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
      {tab === "Posts" && <Posts userId={Number(id)} />}
      {tab === "Todos" && <Todos userId={Number(id)} />}
      {tab === "Albums" && <Albums userId={Number(id)} />}
    </>
  );
};
