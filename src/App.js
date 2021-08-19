import { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import { useDispatch, useSelector } from 'react-redux'

import AddIcon from '@material-ui/icons/Add'
import RotateLeftIcon from '@material-ui/icons/RotateLeft'

import {
	addTodo,
	resetList,
	addAsyncTodo as asyncTodo,
} from './redux/slices/todoSlice'

import TodoList from './Components/TodoList'

function App() {
	const dispatch = useDispatch()
	const { loading } = useSelector((state) => state.todo)

	const [todoInput, setTodoInput] = useState('')

	const [showInput, setShowInput] = useState(false)

	const addNormalTodo = () => {
		dispatch(addTodo(todoInput))
		setShowInput(false)
		setTodoInput('')
	}

	const addAsyncTodo = () => {
		dispatch(asyncTodo(todoInput))
		setShowInput(false)
		setTodoInput('')
	}

	return (
		<div className='App'>
			<Grid container justifyContent='center'>
				<Grid item xs={5}>
					<Typography variant='h2' align='center'>
						Cules Todo list
					</Typography>

					<TodoList />

					<Grid container justifyContent='space-between'>
						<Grid item>
							<IconButton onClick={() => setShowInput(true)}>
								<AddIcon />{' '}
							</IconButton>
						</Grid>
						<Grid item>
							<IconButton onClick={() => dispatch(resetList())}>
								<RotateLeftIcon />{' '}
							</IconButton>
						</Grid>
					</Grid>

					{loading && <CircularProgress style={{ margin: '0 50%' }} />}

					{showInput && (
						<>
							<TextField
								value={todoInput}
								onChange={(event) => setTodoInput(event.target.value)}
								fullWidth
							/>
							<Grid container justifyContent='space-between'>
								<Grid item>
									<Button
										type='submit'
										variant='contained'
										color='primary'
										style={{ display: 'block', margin: '1rem 0' }}
										onClick={() => addNormalTodo()}
									>
										Add Normal Todo
									</Button>
								</Grid>
								<Grid item>
									<Button
										type='submit'
										variant='contained'
										color='secondary'
										style={{ display: 'block', margin: '1rem 0' }}
										onClick={() => addAsyncTodo()}
									>
										Add Async Todo
									</Button>
								</Grid>
							</Grid>
						</>
					)}
				</Grid>
			</Grid>
		</div>
	)
}

export default App
