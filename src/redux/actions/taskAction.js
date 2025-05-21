import { ADD_TASK, DELETE_TASK, EDIT_TASK,TOGGLE_TASK , FILTER_TASK, CLEAR_ALL } from "./taskActionType";

export const addTask = (value) => {
    return {
        type: ADD_TASK,
        payload:  {id:Date.now(), text: value , completed: false}
    }
}

export const toggleTask = (id) => {
    return {
        type: TOGGLE_TASK,
        payload: id
    }
}

export const deleteToggle = (id) => {
    return {
        type: DELETE_TASK,
        payload: id
    }
}

export const editToggle = (id, text) => {
    return {
        type: EDIT_TASK,
        payload: {id, text}
    }
}

export const filterTask = (value) =>{
    return {
        type: FILTER_TASK,
        payload: value
    }
}

export const clearAll = () => {
    return {
        type: CLEAR_ALL
        // payload: value
    }
}