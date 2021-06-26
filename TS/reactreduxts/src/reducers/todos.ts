import { Todo, FetchTodosAction } from "../actions";
import { ActionTypes } from "../actions/types";

export const todosReducers = (state: Todo[] = [], action: FetchTodosAction) => {
    switch (action.type) {
        case ActionTypes.fetchTodos:
            return action.payload;

        default:
            return state;
    }
};
