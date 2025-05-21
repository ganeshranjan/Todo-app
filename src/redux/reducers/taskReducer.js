import { ADD_TASK, DELETE_TASK, EDIT_TASK, TOGGLE_TASK , FILTER_TASK } from "../actions/taskActionType";

const initialState = [];

export const taskReducer = (state = initialState, action ) => {

    console.log("taskReducer",initialState, action)
    switch (action.type) {
        case ADD_TASK: 
           return [...state, action.payload];
        
        case TOGGLE_TASK: 
           return state.map((item) => {
            if(item.id === action.payload) {
               return {...item,completed: !item.completed }
            }
            return item
           })
        case EDIT_TASK: 
            return state.map((item) => {
            if(item.id === action.payload.id) {
               return {...item,text: action.payload.text }
            }
            return item
           });
        case DELETE_TASK: 
            return state.filter((item) =>  {
                if(item.id === action.payload) {
                    return false
                } else {
                    return true
                }
            })
        default: 
            return state;
    }

}
