import React from "react";

function TodoListFooter({
  todos,
  getActiveTodos,
  setFilter,
  filter,
  clearCompletedTodos,
}) {
  if (todos.length <= 0) {
    return;
  }
  return (
    <div className="foot">
      <div>{getActiveTodos()} remaining tasks</div>
      <div className="foot-btns">
        <button
          className={filter === "All" ? "active" : "noActive"}
          onClick={() => setFilter("All")}
        >
          All
        </button>
        <button
          className={filter === "Active" ? "active" : "noActive"}
          onClick={() => setFilter("Active")}
        >
          Active
        </button>
        <button
          className={filter === "Completed" ? "active" : "noActive"}
          onClick={() => setFilter("Completed")}
        >
          Completed
        </button>
        <button onClick={clearCompletedTodos}>Clear Completed</button>
      </div>
    </div>
  );
}

export default TodoListFooter;
