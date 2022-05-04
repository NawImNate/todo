import React from "react";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faPlusSquare);

const form = ({ setInputText, todos, setTodos, inputText }) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText();
  };

  return (
    <div>
      <form>
        <div className="todo-input">
          <input
            onChange={inputTextHandler}
            type="text"
            className="todo-input"
            placeholder="Enter task here..."
          />
          <button
            onClick={submitTodoHandler}
            className="todo-input"
            type="submit"
          >
            <FontAwesomeIcon icon="fa-solid fa-square-plus" />
          </button>
        </div>
        <div className="select">
          <select name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default form;
