import React from 'react';
import Todo from "./Todo";

function TodoList({
  filterHandler,
  completedTaskHandler,
  deleteSingleHandler
}) {
  return (
    <div className="todoList">
      {filterHandler().length > 0 ? (
        filterHandler().map((todo, index) => (
          <Todo
            className=""
            key={todo.id}
            todo={todo}
            completedTaskHandler={completedTaskHandler}
            deleteSingleHandler={deleteSingleHandler}
          />
        ))
      ) : (
        <div>No Tasks to show</div>
      )}
    </div>
  );
}
export default TodoList;
