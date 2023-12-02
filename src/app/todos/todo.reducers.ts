import { Action,  createReducer, on, State } from '@ngrx/store';
import {borrar, borrarCompletados, crear, editar, toggle, toogleAll } from './todo.action';
import { Todo } from './models/todo.model';



export const estadoInicial:Todo[] = [
    new Todo('Salvar al mundo1'),
    new Todo('Salvar al mundo2'),
    new Todo('Salvar al mundo3'),
];

const _todoReducer = createReducer(
    estadoInicial,
  on(crear, (state,{texto}) => [...state, new Todo(texto)] ),
  
  on( borrar, ( state, {id} )=> state.filter( todo => todo.id!==id)),

  on(toggle, (state,{id}) => {
    return state.map(todo=>{
        if(todo.id===id){
        return{
            ...todo,
            completado: !todo.completado
        }
    }else{
        return todo;
    }
    })
  }),

  on(editar, (state,{id,texto}) => {
    return state.map(todo=>{
        if(todo.id===id){
            console.log('reduxcer: texto:',texto);
        return{
            ...todo,
            texto: texto
        }
    }else{
        return todo;
    }
    })
  }),

  on(toogleAll, (state,{completado}) => {
    return state.map(todo=>{
        
        return{
            ...todo,
            completado: completado
        }
    
    })
  }),

  on( borrarCompletados, ( state)=> state.filter( todo => !todo.completado)),


);

export function todoReducer(state: Todo[] | undefined, action: Action){
    return _todoReducer(state, action);
}