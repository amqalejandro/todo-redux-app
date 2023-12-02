//indica el estabdo global 

import { ActionReducerMap } from "@ngrx/store";
import { Todo } from "./todos/models/todo.model";
import { todoReducer } from "./todos/todo.reducers";
import { filtrosValidos } from "./filtros/filtro.actions";
import { filtroReducer } from "./filtros/filtro.reducers";

export interface AppState{
    todos: Todo[],
    filtro: filtrosValidos
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filtro: filtroReducer
}