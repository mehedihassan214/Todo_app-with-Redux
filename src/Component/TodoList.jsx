import React from 'react';
import { useDispatch } from 'react-redux';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { deleteTodo } from '../features/todo/todoSlice';

const TodoList = ({ todos, handleEdit }) => {
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    };

    return (
        <div>
            <div className='w-1/2 m-auto p-4 text-center'>
                <ul>
                    {todos.map((todo, id) => (
                        <li key={id} className='w-full bg-gray-500 p-3 mt-2 rounded-sm flex justify-between'>
                            {todo}
                            <div className='flex gap-x-4'>
                                <button onClick={() => handleEdit(id, todo)}><FaEdit /></button>
                                <button onClick={() => handleDelete(id)}><MdDelete /></button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TodoList;
