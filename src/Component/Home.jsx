import React, { useRef, useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import TodoModal from './TodoModal';
import TodoList from './TodoList';
import { useSelector } from 'react-redux';

const Home = () => {
    const [isCreateTodo, setIsCreateTodo] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [editId, setEditId] = useState(null);
    const inputRef = useRef();
    const [inputTodoValue, setInputTodoValue] = useState('');
    const [searchTerm, setSearchTerm] = useState('');  // New state for search term
    const todos = useSelector((state) => state.todo.value);

    const handleCreateTodo = () => {
        setEditId(null);
        setIsCreateTodo(true);
        setTimeout(() => {
            inputRef.current?.focus();
        }, 0);
    };

    const handleCloseTodo = () => {
        setIsCreateTodo(false);
        setErrorMessage('');
        setInputTodoValue('');
    };

    const handleEdit = (id, todo) => {
        setEditId(id);
        setIsCreateTodo(true);
        setInputTodoValue(todo);
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredTodos = todos.filter(todo =>
        todo.toLowerCase().includes(searchTerm.toLowerCase())
    );


    // const filterTodos = (todos, term) => 
    //     todos.filter(todo => todo.toLowerCase().includes(term.toLowerCase()));
    
    return (
        <>
            <div className='text-center p-4'>
                <h1>Todo App</h1>
            </div>
            <div className='flex justify-center p-4 items-center'>
                <div className='flex justify-between w-1/2 p-4 items-center'>
                    <button className='px-7 py-[5px] bg-green-200 rounded-[10px]' onClick={handleCreateTodo}>
                        Create Todo
                    </button>
                    <div className='flex relative'>
                        <input 
                            type="text" 
                            placeholder='Search Todo' 
                            className='border border-green-100 p-1 outline-none w-[335px]' 
                            onChange={handleSearch}  // Update search term on change
                            value={searchTerm}
                        />
                        <button className='px-7 py-[5px] bg-purple-400 absolute right-0'>Search</button>
                    </div>
                    <div className='flex gap-x-5 px-7 py-[5px] bg-green-200 rounded-[10px] items-center'>
                        <h3>Status</h3>
                        <button><MdKeyboardArrowDown /></button>
                    </div>
                </div>
            </div>
            <TodoModal
                isCreateTodo={isCreateTodo}
                handleCloseTodo={handleCloseTodo}
                inputRef={inputRef}
                errorMessage={errorMessage}
                setErrorMessage={setErrorMessage}
                inputTodoValue={inputTodoValue}
                setInputTodoValue={setInputTodoValue}
                editId={editId}
                setEditId={setEditId}
            />
            <TodoList
                todos={filteredTodos}  // Pass the filtered todos
                handleEdit={handleEdit}
            />
        </>
    );
};

export default Home;
