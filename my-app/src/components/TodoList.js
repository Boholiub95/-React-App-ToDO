import React,{useState} from 'react';
import TodoForm from './components/TodoForm';

function TodoList() {
    const [todos,setTodos] = useState([])
    return (
        <div>
            <h1>Hey</h1>
            <TodoForm/>
        </div>
    );
}

export default TodoList
