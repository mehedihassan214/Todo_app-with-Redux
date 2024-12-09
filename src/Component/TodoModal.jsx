import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, updateTodo } from '../features/todo/todoSlice';

const TodoModal = ({ isCreateTodo, handleCloseTodo, inputRef, errorMessage, setErrorMessage, inputTodoValue, setInputTodoValue, editId, setEditId }) => {
    const dispatch = useDispatch();

    const handleInputTodo = (e) => {
        setInputTodoValue(e.target.value);
    };

    const handleAddTodo = () => {
        if (!inputTodoValue) {
            setErrorMessage('Your input field is required');
            return;
        }
        setErrorMessage('');
        if (editId !== null) {
            dispatch(updateTodo({ id:editId, value:inputTodoValue }));
        } else {
            dispatch(addTodo(inputTodoValue));
        }
        setInputTodoValue('');
        setEditId(null);  
        handleCloseTodo();
    };

    return (
        <>
            {isCreateTodo && (
                <div className='bg-black bg-opacity-50 h-full w-full inset-0 fixed flex justify-center items-center'>
                    <div className='w-[400px] bg-[#f1f1f1] border border-red-200 p-3 flex items-center justify-center m-auto relative flex-col'>
                        <input
                            type="text"
                            placeholder='Write Todo'
                            className='border border-blue-400 p-2 w-full'
                            onChange={handleInputTodo}
                            value={inputTodoValue}
                            ref={inputRef}
                        />
                        <p className='text-red-500'>{errorMessage}</p>
                        <div className='inline-block space-x-10 mt-7'>
                            <button className='px-7 py-4 bg-green-200 rounded-[10px]' onClick={handleAddTodo}>
                                {editId !== null ? 'Save Todo' : 'Add Todo'}
                            </button>
                            <button className='px-7 py-4 bg-red-400 rounded-[10px]' onClick={handleCloseTodo}>
                                Cancel
                            </button>
                        </div>
                        <button className='mt-[-168px] right-0 absolute' onClick={handleCloseTodo}>X</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default TodoModal;
