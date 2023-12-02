import { Component, OnInit } from '@angular/core';
import { State, Store, createSelector } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as action from 'src/app/filtros/filtro.actions';
import * as actionTodo from 'src/app/todos/todo.action';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filtroActual: action.filtrosValidos='todos';
  filtros:action.filtrosValidos[]=['todos','compleatados','pendientes'];

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('filtro').subscribe(filtro =>{
      console.log(filtro);
    })
  }

  cambiarFiltro(filtroSeleccionado:action.filtrosValidos){
    this.store.dispatch(action.setFiltro({filtro:filtroSeleccionado}));
  }

  borrarCompletados(){
    this.store.dispatch(actionTodo.borrarCompletados());
  }
  

}
