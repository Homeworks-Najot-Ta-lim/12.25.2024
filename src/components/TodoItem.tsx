import React from "react";
import { Todo } from "../types";

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li style={styles.item}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        style={styles.checkbox}
      />
      <span
        style={{
          ...styles.text,
          textDecoration: todo.completed ? "line-through" : "none",
        }}
      >
        {todo.title}
      </span>
      <button onClick={() => deleteTodo(todo.id)} style={styles.deleteButton}>
        Delete
      </button>
    </li>
  );
};

const styles = {
  item: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 20px", 
    borderBottom: "1px solid #eee",
  },
  checkbox: {
    marginRight: "12px",
  },
  text: {
    flex: 1,
    fontSize: "18px", 
    color: "#555", 
  },
  deleteButton: {
    padding: "6px 12px", 
    fontSize: "16px", 
    color: "#fff",
    backgroundColor: "#dc3545",
    border: "none",
    borderRadius: "8px", 
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  deleteButtonHover: {
    backgroundColor: "#c82333",
  },
};

export default TodoItem;
