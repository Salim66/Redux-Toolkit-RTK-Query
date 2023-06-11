import React, { useState } from 'react'
import { useCreateTodoMutation, useDeleteTodoMutation, useGetTodosQuery } from '../api/apiSlice';

const Todos = () => {

    const [name, setName] = useState("");
    const { data: todos } = useGetTodosQuery();
    const [createTodo] = useCreateTodoMutation();
    const [deleteTodo] = useDeleteTodoMutation();

    const handleAddTodo = () => {
        createTodo(name);
        setName("");
    }

  return (
    <div className="container my-5">
        <div className="row my-5 d-flex justify-content-center">
            <div className="col-md-4 my-5">
                <div className="card">
                    <div className="card-header">
                        <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Please insert name' />
                        <button onClick={handleAddTodo}>Add</button>
                    </div>
                    <div className="card-body">
                        <ul className="list-group">
                            {todos && todos?.map((item, index) => {
                                return <li className="list-group-item" key={index}>{ item.name } <button onClick={() => deleteTodo(item.id)}>x</button></li>
                            })}                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Todos