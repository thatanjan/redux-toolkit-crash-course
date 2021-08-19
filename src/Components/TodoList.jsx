import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'
import Paper from '@material-ui/core/Paper'

import DeleteIcon from '@material-ui/icons/Delete'

const TodoList = () => {
	return (
		<List>
			{Array(5)
				.fill(0)
				.map((item, index) => (
					<ListItem component={Paper} key={index} style={{ marginBottom: '1rem' }}>
						<ListItemText primary='todo' />
						<ListItemSecondaryAction>
							<IconButton edge='end'>
								<DeleteIcon />
							</IconButton>
						</ListItemSecondaryAction>
					</ListItem>
				))}
		</List>
	)
}

export default TodoList
