import React, { useEffect, useState } from "react";
import { Todo, Filter } from "../types/todo";
import TodoItem  from "../components/TodoItem";
import TodoForm from "../components/TodoForm";
import { fetchTodos, createTodo, toggleTodoById } from "../services/todoService";


const Home : React.FC = () => {

    const [todos, setTodos] = useState<Todo[]>([]);
    const [text, setText] = useState("");
    const [filter, setFilter] = useState<Filter>("all");

    useEffect(() => {
        fetchTodos().then(setTodos);
    }, []);

    const addTodo = async () => {
        const newTodo = await createTodo(text);
        setTodos(prev => [...prev, newTodo]);
        setText("");
    }

    const toggleTodo = async (id: string) => {
        const updated = await toggleTodoById(id); 
        console.log(`Toggled todo ${id} →`, updated.completed);
        setTodos(prev => prev.map(t => (t.id === id ? updated : t)));
    };

    const filteredTodos = todos.filter(todo => {
        if( filter === 'completed' ) return todo.completed;
        if( filter === 'incomplete' ) return !todo.completed;
        return true;
    });

    return (
        <div className="p-6 max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-4">Todo App</h1>
            <TodoForm text={text} onChange={e => setText(e.target.value)} onAdd={addTodo} />
            <div className="mb-4 space-x-2">
                <button onClick={() => setFilter('all')} className="px-2 py-1 border">All</button>
                <button onClick={() => setFilter('completed')} className="px-2 py-1 border">Completed</button>
                <button onClick={() => setFilter('incomplete')} className="px-2 py-1 border">Incomplete</button>
            </div>
            <ul className="space-y-2">
                {filteredTodos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} />
                ))}
            </ul>
            <p className="mt-4 text-sm text-gray-600">
                Completed: {todos.filter(t => t.completed).length} / {todos.length}
            </p>
        </div>
    );
}

export default Home;