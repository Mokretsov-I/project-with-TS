import React from "react";

import { useTodosContext } from "todos/context/todos-context";
import { Loader } from "components/Loader";
import { Todos } from "todos/modals";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "./TodosList.scss";

export const TodosList: React.FC = () => {
  const { todos, isLoading } = useTodosContext();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="todos">
      <h2>Todos:</h2>
      {Array.isArray(todos) ? todos.map((todo: Todos) => (
        <div
          className={"todos__item" + (todo.completed ? " completed" : "")}
          key={todo.id}
        >
          <span className="todo__check">
            {todo.completed && <FontAwesomeIcon icon={faCheck} />}
          </span>
          <p className="todo__title">{todo.title}</p>
        </div>
      )) : "Todos is empty"}
    </div>
  );
};
