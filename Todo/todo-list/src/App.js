import './App.css';
import {useState, useEffect} from 'react';
import firebase from './firebase';
import Button from '@mui/material/Button';
import { FormControl, Input, InputLabel } from '@mui/material';
import Todo from './Todo';
import db from './firebase';

function App() {
  // we have hardcoded some tasks, these task will be erased after refreshed 
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
// id: doc.id, todo: 
  useEffect(() => {
    db.collection('todos').orderBy("timestamp", "desc").onSnapshot(snapshot => {
      setTodos(snapshot.docs.map( doc => ({id: doc.id, todo: doc.data().todo})))
    })
  },[])

  //This runs when we click the button
  const addTodo = (event) => {
    event.preventDefault(); //It will stop refreshing the page
    
    //we will add something in database but in the format of object so that by using useEffect function we can traverse it in our todos collection
    
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.Timestamp.now()
    })

    
    // setTodos([...todos, input]) //Whatever task we will give, it will save in input and setTodos will print that input in the todos list
    setInput(''); //As we were adding some task it wasn't clearing, this piece of code will clear the input field for us every time we enter something
  }


  return (
    <div className="App">
      <h2>Add a Todo:</h2>
      <form>
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
        </FormControl>
      <Button type="submit" disabled={!input} onClick={addTodo} variant="contained" color="success">
      Add Me
      </Button>
      </form>
       
      <ul>
        {/* todos is the name of an array, We use map to traverse through array, we are saving tasks in todo and printing those task as li's */}
        {todos.map(todo => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
