import {
    ADD_TODO,
    REMOVE_TODO,
    MOVE_PROGRESS,
    REMOVE_PROGRESS,
    REMOVE_DONE,
    MOVE_DONE
} from '../constants';

const Values = {
    todos: [],
    done: [],
    inProgress: [],
}

export const reducer = (state = Values, action) => {
    switch (action.type) {
        case ADD_TODO: {
            console.log(action)

            return {
                ...state,
                todos: [ ...state.todos, action.payload],
            }
        }
        case REMOVE_TODO: {
            return {
                ...state,
                todos: [...state.todos.filter(todo => todo.id !== action.payload)]
            }
        }
        case MOVE_PROGRESS: {
            return {
                ...state,
                inProgress: [...state.inProgress, action.payload],
            }
        }
        case REMOVE_PROGRESS: {
            return {
                ...state,
                inProgress: [...state.inProgress.filter(todo => todo.id !== action.payload)]
            }
        }
        case MOVE_DONE: {
            return {
                ...state,
                done: [...state.done, action.payload],
            }
        }
        case REMOVE_DONE: {
            return {
                ...state,
                done: [...state.done.filter(todo => todo.id !== action.payload)]
            }
        }
        default: {
            return state
        }
    }
}