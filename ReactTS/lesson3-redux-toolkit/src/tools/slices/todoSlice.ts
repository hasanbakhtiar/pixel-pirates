import { createSlice } from "@reduxjs/toolkit";
import type { todoType } from "../../types/todos.model";

const initialState: todoType[] = [
    {
        id: "1",
        text: "Read a book"
    },
    {
        id: "2",
        text: "Go to lesson"
    }
]

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        add: (state, action) => {
            const newTodo: todoType = { id: crypto.randomUUID, text: action.payload }
            state.push(newTodo)
        }
    }
})

export default todoSlice.reducer;
export const { add } = todoSlice.actions; 