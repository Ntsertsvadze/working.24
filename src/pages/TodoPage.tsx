import React, { useEffect, useState } from "react"
import { ITodo } from "../interface/todo.interface";

const TodoPage: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then((data: ITodo[]) => setTodos(data))
    }, [])
    
    return <h1>
        {todos.map(({completed, id, title, userId}) =>
            <div key={id}>
                <h3>{title}</h3>
                <h3>{userId}</h3>
                <h3>{completed}</h3>
            </div>

        )}
    </h1>;
   
}

export default TodoPage