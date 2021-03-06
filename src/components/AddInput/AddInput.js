import React, { useState } from "react";
import "./AddInput.css";
import { v4 } from "uuid";
import TodoList from "../TodoList/TodoList";
import { useTranslation } from "react-i18next";

function AddInput({ setTodos, todos }) {
  const [todo, setTodo] = useState("");
  const { t } = useTranslation();

  const addTodo = () => {
    let updatedTodos = [
      ...todos,
      {
        id: v4(),
        task: todo,
        completed: false,
      },
    ];
    setTodos(updatedTodos);
    setTodo("");
  };

  return (
    <div className="input-container">
      <input
        className="input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder={t("Add a new task here...")}
      />
      <button className="add-btn" onClick={addTodo}>
        {t("Add")}
      </button>
    </div>
  );
}

export default AddInput;
