import { FILTER_TASK } from "../actions/taskActionType";

const initialState = "all";

export const filterReducer = (state= initialState, action) => {
    switch (action.type) {
        case FILTER_TASK: 
         return action.payload
        default:
         return state
    }
}