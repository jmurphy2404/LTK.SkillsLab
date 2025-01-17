import { createSlice } from '@reduxjs/toolkit'

export const toDoSlice = createSlice({
    name: 'toDo',
    initialState: {
        todos: [],
    },

    reducers: {
        addItem: (state, action) => {
            state.todos.push(action.payload)
        },
        deleteItem: (state, action) => {
            //need to add id and remove corrrect items
            state.todos.splice(action.payload, 1);
        },
    }
})

export const { addItem, deleteItem } = toDoSlice.actions

export default toDoSlice.reducer