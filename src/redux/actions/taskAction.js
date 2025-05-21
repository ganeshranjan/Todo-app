import { ADD_TASK, DELETE_TASK, EDIT_TASK,TOGGLE_TASK , FILTER_TASK } from "./taskActionType";

export const addTask = (value) => {
    console.log("addTaskcalled", value)
    return {
        type: ADD_TASK,
        payload:  {id:Date.now(), text: value , completed: false}
    }
}

export const toggleTask = (id) => {
    console.log("iddd", id)
    return {
        type: TOGGLE_TASK,
        payload: id
    }
}

export const deleteToggle = (id) => {
    console.log("iddd", id)
    return {
        type: DELETE_TASK,
        payload: id
    }
}

export const editToggle = (id, text) => {
    console.log("editToggle", id, text)
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
// { 
//         id: Date.now(),
//         text: taskValue.trim(),
//         completed: false
//       }