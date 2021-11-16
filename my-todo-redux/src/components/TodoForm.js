import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../actions/action'

export const TodoForm = () => {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        if(value) {
            e.preventDefault();
            dispatch(addTodo(
                {
                    id: new Date().getTime(),
                    task: value,
                }
            ))
            setValue('')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Enter task"
                onChange={(e) => setValue(e.target.value)}
                type="text"
                value={value}
            />
            <button type="submit">add</button>
        </form>
    )
}