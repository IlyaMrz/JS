import { FetchTodosAction, DeleteTodoAction } from "./todos";

export enum ActionTypes {
    fetchTodos, // fetchTodos='0'
    deleteTodo,
}

export type Action = FetchTodosAction | DeleteTodoAction;
