import React, { useState } from "react";
import { Todo } from "./types";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (title: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div style={styles.appContainer}>
      <h1 style={styles.title}>Todo App</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

const styles = {
  appContainer: {
    fontFamily: "'Roboto', sans-serif",
    textAlign: "center" as const,
    maxWidth: "700px",
    margin: "0 auto",
    padding: "30px", 
    border: "1px solid #ddd",
    borderRadius: "12px",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "25px",
    color: "#333",
  },
};

export default App;
