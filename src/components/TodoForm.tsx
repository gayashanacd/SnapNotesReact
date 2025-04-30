import React from "react";

type Props = {
    text: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onAdd: () => void;
};

const TodoForm : React.FC<Props> = ({text, onChange, onAdd}) => (
    <div className="flex gap-2 mb-4">
        <input
            type="text"
            value={text}
            onChange={onChange}
            placeholder="New todo"
            className="border p-2 flex-1"
        />
        <button onClick={onAdd} className="bg-blue-500 text-white px-4 py-2 rounded">
            Add
        </button>
    </div>    
);

export default TodoForm;
