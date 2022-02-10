import { List, ListItem, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';
import db from './firebase';
import './Todo.css'

function Todo(props) {
  return (
  <List className="todo__list">
      <ListItem>
          <ListItemText primary={props.todo.todo} secondary="secondary"/>
      </ListItem>
      <DeleteIcon className="delete" onClick={event => 
        {db.collection('todos').doc(props.todo.id).delete()}
        } />
  </List>
  )
}

export default Todo;