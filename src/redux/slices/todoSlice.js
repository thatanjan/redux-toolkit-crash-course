import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
	tasks: [],
	loading: false,
}

export const addAsyncTodo = createAsyncThunk(
	'todo/addAsyncTodo',
	async (todoName) => {
		const data = await new Promise((resolve) => {
			setTimeout(() => {
				resolve(todoName)
			}, 5000)
		})

		return data
	}
)

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
	extraReducers: (builder) => {
		builder
			.addCase(addAsyncTodo.pending, (state) => {
				state.loading = true
			})
			.addCase(addAsyncTodo.fulfilled, (state, { payload }) => {
				state.loading = false
				state.tasks.push(payload)
			})
	},
})

export const { addTodo, removeTodo, resetList } = todoSlice.actions

export default todoSlice.reducer
