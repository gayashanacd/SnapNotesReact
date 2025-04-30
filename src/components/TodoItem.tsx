import React from "react";
import { Todo } from "../types/todo";

type Props = {
    todo: Todo;
    onToggle: (id: string) => void;
};

const TodoItem : React.FC<Props> = ({ todo, onToggle }) => (
    <li
        onClick={() => onToggle(todo.id)}
        className={`cursor-pointer p-2 border rounded ${todo.completed ? 'line-through text-gray-500' : ''}`}
    >
        {todo.text}
    </li>
);

export default TodoItem;