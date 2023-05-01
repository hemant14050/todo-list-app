import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoListFooter from "./components/TodoListFooter";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [inputTodo, setInputTodo] = useState("");
  const [filter, setFilter] = useState("All");

  const showTodoList = () => {
    const todoList = localStorage.getItem("todoList");
    if (todoList) {
      setTodos(JSON.parse(todoList));
    }
  };

  useEffect(() => {
    showTodoList();
  }, []);

  // const addTaskBtnHandler = (e) => {

  // }

  const addTaskBtnHandler = (e) => {
    if (inputTodo !== "") {
      setTodos([
        {
          task: inputTodo,
          id: Date.now().toString(),
          isCompleted: false
        },
        ...todos
      ]);

      // to save in local session storage
      localStorage.setItem("todoList", JSON.stringify(todos));

      setInputTodo("");
      setFilter("All");
    }
  };

  const addTaskHandler = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      setTodos([
        {
          task: inputTodo,
          id: Date.now().toString(),
          isCompleted: false
        },
        ...todos
      ]);

      // to save in local session storage
      localStorage.setItem("todoList", JSON.stringify(todos));

      setInputTodo("");
      setFilter("All");
    }
  };

  // to implement delete feature: delete single btn
  const deleteSingleHandler = (deletedTodoId) => {
    // [...todos].splice(index, 1);
    // setTodos([...todos]);
    // console.log(index);
    const newTodos = todos.filter((todo) => todo.id !== deletedTodoId);
    setTodos(newTodos);
    localStorage.setItem("todoList", JSON.stringify(newTodos));
  };

  const completedTaskHandler = (taskId) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === taskId) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted
        };
      }
      return todo;
    });

    setTodos(newTodos);
    localStorage.setItem("todoList", JSON.stringify(newTodos));

    // console.log(JSON.stringify(newTodos));
  };

  const filterHandler = () => {
    if (filter === "Active") {
      return todos.filter((todo) => todo.isCompleted === false);
    } else if (filter === "Completed") {
      return todos.filter((todo) => todo.isCompleted === true);
    } else {
      return todos;
    }
  };

  const clearCompletedTodos = () => {
    const activeTodos = todos.filter((todo) => !todo.isCompleted);
    setTodos(activeTodos);
    localStorage.setItem("todoList", JSON.stringify(activeTodos));
  };

  // get active todos
  const getActiveTodos = () => {
    const activeTodos = todos.filter((todo) => !todo.isCompleted);
    return activeTodos.length;
  };

  return (
    <div className="App">
      <h1 className="heading">Todo App</h1>
      <TodoInput
        setInputTodo={setInputTodo}
        inputTodo={inputTodo}
        addTaskHandler={addTaskHandler}
        addTaskBtnHandler={addTaskBtnHandler}
      />

      <TodoList
        filterHandler={filterHandler}
        completedTaskHandler={completedTaskHandler}
        deleteSingleHandler={deleteSingleHandler}
      />

      <TodoListFooter
        todos={todos}
        getActiveTodos={getActiveTodos}
        setFilter={setFilter}
        filter={filter}
        clearCompletedTodos={clearCompletedTodos}
      />
    </div>
  );
}

