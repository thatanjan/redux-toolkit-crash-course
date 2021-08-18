import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'
import Paper from '@material-ui/core/Paper'
import { useSelector, useDispatch } from 'react-redux'

import DeleteIcon from '@material-ui/icons/Delete'

import { removeTodo } from '../redux/slices/todoSlice'

const TodoList = () => {
	const { tasks } = useSelector((state) => state.todo)
	const dispatch = useDispatch()

	return (
		<List>
			{tasks.map((item, index) => (
				<ListItem component={Paper} key={index} style={{ marginBottom: '1rem' }}>
					<ListItemText primary={item} />
					<ListItemSecondaryAction>
						<IconButton edge='end' onClick={() => dispatch(removeTodo(index))}>
							<DeleteIcon />
						</IconButton>
					</ListItemSecondaryAction>
				</ListItem>
			))}
		</List>
	)
}

export default TodoList
