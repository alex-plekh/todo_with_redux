import React from 'react'
import {useDispatch,useSelector} from "react-redux";
import { deleteFromInProgress, removeTodo, moveToDone} from '../actions/action'


function Progress() {
    const dispatch = useDispatch()
    const Progress = useSelector((state => state.inProgress))

    return (
        <div className="task_card">
            <h3 className='card_title'>In progress</h3>

            {Progress.map((todo) => {
                return (
                    <div key={todo.id} className="todo_item">
                        <div className='todoInput'>{todo.task}</div>
                        <div className="btn_wrapper">
                            <button className="btn_done" onClick={() => dispatch(moveToDone(todo.id, todo.task), dispatch(removeTodo(todo.id), dispatch(deleteFromInProgress(todo.id))))}>
                                Done
                            </button>
                            <button className="btn_delete" onClick={() => dispatch(deleteFromInProgress(todo.id))}>
                                Delete
                            </button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Progress