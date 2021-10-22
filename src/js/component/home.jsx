import React from "react";

import React, { useState } from "react";
export default function TodoList() {
    const [inputItem, setInputItem] = useState("");
    const [todos, setTodos] = useState(["Thing 1", "Thing 2", "Thing 3"]);
    function addToTodos(e) {
        e.preventDefault();
        const updatedTodos = todos.concat(inputItem);
        setTodos(updatedTodos);
        console.log(todos);
    }
    function removeFromTodos(e) {
        console.log("remove");
    }
    console.log("these are the todos" + todos);
    return (
        <div className="todoList">
            <h1>Todo List</h1>
            <input
                value={inputItem}
                onChange={e => setInputItem(e.target.value)}
            />
            <button onClick={addToTodos}>Submit</button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo}>{todo}</li>
                ))}
            </ul>
        </div>
    );
}
export default ;
