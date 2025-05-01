import { Todo } from "../types/todo";

const BASE_URL = "http://localhost:3000";

export const fetchTodos = async (): Promise<Todo[]> => {
    const res = await fetch(BASE_URL);    
    return await res.json();
}

export const createTodo = async ( text: string ): Promise<Todo> => {
    const res = await fetch(BASE_URL, {
        method : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
    });  
    return await res.json();    
} 

export const toggleTodoById = async ( id: string ): Promise<Todo> => {
    const res = await fetch(`${BASE_URL}/${id}`, {
        method: 'PUT',
    });
    return await res.json();  
}