import React from 'react'

function Todo({ todo, completedTaskHandler, deleteSingleHandler }) {
    return (
      <div className="todo" key={todo.id}>
        <div className="check-item">
          <div className="c-box">
            <input
              type="checkbox"
              name="task"
              id=""
              checked={todo.isCompleted}
              // defaultChecked={todo.isCompleted}
              onChange={() => completedTaskHandler(todo.id)}
            />
          </div>
  
          <span className={!todo.isCompleted ? "" : "strike"}>
            <span className="noActive">{todo.task}</span>
          </span>
        </div>
        <button onClick={() => deleteSingleHandler(todo.id)}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/98/98090.png?w=740&t=st=1681219962~exp=1681220562~hmac=dab029531b35e50e28e0e921c3b9874c294b54256f09fb1b8b1ff6db05b5ecf9"
            height="15px"
            width="15px"
            alt="bin"
          />
        </button>
      </div>
    );
  }
  
  export default Todo;  