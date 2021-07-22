import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	tasks: [],
}

const todoSlice = createSlice({
	name: 'todoList',
	initialState,
	reducers: {
		addTodo: ({ tasks }, { payload }) => {
			tasks.push(payload)
		},
		removeTodo: ({ tasks }, { payload }) => {
			tasks.splice(payload, 1)
		},
		resetList: () => initialState,
	},
})

export const { addTodo, removeTodo, resetList } = todoSlice.actions

export default todoSlice.reducer
