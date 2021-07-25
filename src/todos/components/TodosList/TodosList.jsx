import React from "react";

import { useTodosContext } from "todos/context/todos-context";
import { Loader } from "components/Loader";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "./TodosList.scss";

export const TodosList = () => {
  const { data, isLoading } = useTodosContext();

  if (isLoading) {
    <Loader />;
  }

  return (
    <div className="todos">
      <h2>Todos:</h2>
      {data?.map((todo) => (
        <div
          className={"todos__item" + (todo.completed ? " completed" : "")}
          key={todo.id}
        >
          <span className="todo__check">
            {todo.completed && <FontAwesomeIcon icon={faCheck} />}
          </span>
          <p className="todo__title">{todo.title}</p>
        </div>
      ))}
    </div>
  );
};
