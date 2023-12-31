import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { toogleAll } from '../todo.action';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

  completado: boolean =false;

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
  }

toggleAll() {
  this.completado = !this.completado;
  this.store.dispatch(toogleAll({completado:this.completado}));


}

}
