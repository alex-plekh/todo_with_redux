import React from 'react';
import {useDispatch,useSelector} from "react-redux";
import { removeDone } from '../actions/action';

function TodoDone() {
    const dispatch = useDispatch()
    const done = useSelector((state => state.done))

    return (
        <div className="task_card">
            <h3 className='card_title'>Done</h3>
            {done.map((todo) => {
                return (
                    <div key={todo.id} className="todo_item">
                        <div className="item-text">
                            {todo.task}
                        </div>
                        <div className="emoji">
                            <button className="todo-delete" onClick={() => dispatch(removeDone(todo.id))}>
                                Delete
                            </button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default TodoDone;