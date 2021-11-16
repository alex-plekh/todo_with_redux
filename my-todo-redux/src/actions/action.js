import { ADD_TODO, REMOVE_TODO, MOVE_PROGRESS, REMOVE_PROGRESS, MOVE_DONE, REMOVE_DONE } from '../constants';

export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: todo,
    }
}

export const removeTodo = (id) => {
    return {
        type: REMOVE_TODO,
        payload: id
    }
}

export const moveToInProgress = (id, task) => {
    return {
        type: MOVE_PROGRESS,
        payload: {
            id,
            task,
        }
    }
}

export const deleteFromInProgress = (id) => {
    return {
        type: REMOVE_PROGRESS,
        payload: id
    }
}

export const moveToDone = (id, task) => {
    return {
        type: MOVE_DONE,
        payload: {
            id,
            task,
        }
    }
}

export const removeDone = (id) => {
    return {
        type: REMOVE_DONE,
        payload: id
    }
}

