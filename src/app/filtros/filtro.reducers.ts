import { createReducer, on, Action, State } from '@ngrx/store';
import { setFiltro,filtrosValidos } from './filtro.actions';
import { AppState } from '../app.reducers';


export const initialState:filtrosValidos = 'todos';

const _filtroReducer = createReducer<filtrosValidos,Action>(initialState,
  on(setFiltro, (state, { filtro }) => filtro),
);


export function filtroReducer(state:any, action:Action){
    return  _filtroReducer(state,action);
}
