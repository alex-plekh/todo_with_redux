import React from 'react'
import { TodoForm } from './TodoForm'
import { useDispatch,useSelector } from 'react-redux'
import { removeTodo, moveToInProgress, moveToDone } from '../actions/action'


function Todo() {
    const dispatch = useDispatch()
    const todos = useSelector((state => state.todos))

    return (
        <div className="task_card">
            <h3 className='card_title'>Todo</h3>
            <TodoForm />
            {todos.map((todo) => {
                return (
                    <div className='wrapper_todo_item'>
                        <div key={todo.id} className="todo_item">
                            <div className='item_wrapper' onClick={() => dispatch(removeTodo(todo.id))}>
                                {todo.task}
                            </div>
                            <div className="btn_wrapper">
                                <button className="btn_progress" onClick={() => dispatch(moveToInProgress(todo.id, todo.task), dispatch(removeTodo(todo.id)))}>
                                    In Progress
                                </button>
                                <button className="btn_done" onClick={() => dispatch(moveToDone(todo.id, todo.task), dispatch(removeTodo(todo.id)))}>
                                    Done
                                </button>
                                <button className="btn_delete" onClick={() => dispatch(removeTodo(todo.id))}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Todo