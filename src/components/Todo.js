import React, { useState } from "react";

export const todoListItems = [
  { id: "1", todo: "Grocery shopping" },
  { id: "2", todo: "Service car" },
  { id: "3", todo: "Pick up dry cleaning" },
  { id: "4", todo: "Deliver letter" },
  { id: "5", todo: "Send email" },
  { id: "6", todo: "Call Roger back" },
  { id: "7", todo: "Finish filling out forms" },
];

export default function Todo() {
  const [todoItems, setTodoItems] = useState(todoListItems);
  const [done, setDone] = useState(false);

  const styleTitle = {
    display: "flex",
    alignItems: "center",
  };

  const styleItem = {
    color: done ? "red" : "black",
    textDecoration: done ? "line-through" : "",
  };

  const changeTodoItemStatus = () => {
    setDone(!done);
  };

  return (
    <div className="widget-todo container">
      <h2>Todo List</h2>
      <div className="todo-list">
        <div className="todo-title" style={styleTitle}>
          <input type="checkbox" onChange={changeTodoItemStatus}></input>
          <h3>To Do List for 1/18</h3>
        </div>
        <p>Note: checking the list will check off all items</p>
        <ul>
          {todoItems.map((item) => (
            <div className="todo-item" style={styleItem} key={item.id}>
              <li>{item.todo}</li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
