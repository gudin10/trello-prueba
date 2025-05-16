import { Component, Inject, inject } from '@angular/core';
import {DIALOG_DATA, DialogRef} from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faClose,
  faCheckToSlot,
  faBars,
  faUser,
  faTag,
  faCheckSquare,
  faClock,
} from '@fortawesome/free-solid-svg-icons';
import {faTrello} from '@fortawesome/free-brands-svg-icons';
import { BtnComponent } from "../btn/btn.component";
import { ToDo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-dialog',
  imports: [FontAwesomeModule,
            CommonModule,
            BtnComponent],
  templateUrl: './todo-dialog.component.html'
})
export class TodoDialogComponent {

  faClose = faClose;
  faCheckToSlot = faCheckToSlot;
  faBars = faBars;
  faUser = faUser;
  faTag = faTag;
  faCheckSquare = faCheckSquare;
  faClock = faClock;

  todo:ToDo ;

  constructor(
    private dialogRef: DialogRef<OutputData>,
    @Inject(DIALOG_DATA) data: InputData

  ) {
    this.todo = data.todo;
  }



  close(){
    this.dialogRef.close({
      rta:true
    });
  }

  CloseWithRta(rta:boolean){
    this.dialogRef.close({
      rta,
    });
  }
}

interface InputData{
  todo:ToDo;
}

interface OutputData{
  rta:boolean;
}
