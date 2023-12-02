import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { crear } from '../todo.action';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  textInput: FormControl;

  constructor(private strore: Store<AppState>) { 
    this.textInput=new FormControl('', Validators.required);
  }

  ngOnInit(): void {
  }

  agregar(){
    
    if(!this.textInput.valid){return;}    
    this.strore.dispatch(crear({texto:this.textInput.value}));
    this.textInput.reset();

  }

}
