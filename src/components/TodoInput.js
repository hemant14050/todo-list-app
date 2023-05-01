import React from 'react'

function TodoInput({
    setInputTodo,
    inputTodo,
    addTaskHandler,
    addTaskBtnHandler
  }) {
    return (
      <div className="inputBar">
        <input
          type="text"
          onChange={(e) => setInputTodo(e.target.value)}
          value={inputTodo}
          onKeyDown={(e) => addTaskHandler(e)}
          placeholder="Enter task here..."
        />
        <button
          className="addBtn"
          onClick={(e) => {
            addTaskBtnHandler(e);
          }}
        >
          Add
        </button>
      </div>
    );
  }
  
  export default TodoInput;
  