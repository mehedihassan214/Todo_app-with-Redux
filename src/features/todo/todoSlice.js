import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todo',
    initialState: { value: [] },
    reducers: {
        addTodo: (state, action) => {
            state.value.push(action.payload);
        },
        deleteTodo: (state, action) => {
            state.value.splice(action.payload,1) 
        },
        updateTodo: (state, action) => {
            // const { id, value } = action.payload;
            // state.value[id] = value;
            state.value.splice(action.payload.id,1,action.payload.value) 
        }
    }
});

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
