import React, { useState } from "react";

interface TodoInputProps {
  addTodo: (title: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo(title);
      setTitle("");
    }
  };

  return (
    <form style={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new todo"
        style={styles.input}
      />
      <button type="submit" style={styles.button}>
        Add
      </button>
    </form>
  );
};

const styles = {
  form: {
    marginBottom: "25px", 
  },
  input: {
    width: "75%", 
    padding: "12px", 
    fontSize: "18px", 
    border: "1px solid #ccc", 
    borderRadius: "8px", 
    marginRight: "12px", 
  },
  button: {
    padding: "12px 24px", 
    fontSize: "18px", 
    color: "#fff",
    backgroundColor: "#28a745",
    border: "none",
    borderRadius: "8px", 
    cursor: "pointer",
    transition: "background-color 0.3s", 
  },
  buttonHover: {
    backgroundColor: "#218838",
  },
};

export default TodoInput;
