import { TodoDialogComponent } from './../../components/todo-dialog/todo-dialog.component';
import { Component } from '@angular/core';
import  {DragDropModule , CdkDragDrop , moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ToDo , Column } from '../../models/todo.model';
import { CommonModule } from '@angular/common';
import {Dialog} from '@angular/cdk/dialog';

@Component({
  selector: 'app-board',
  imports: [DragDropModule,
            NavbarComponent,
            CommonModule],
  templateUrl: './board.component.html',
  styleUrl:'./board.component.css'
})
export class BoardComponent {

  constructor(
    private dialog: Dialog
  ) {

  }
  columns: Column[] = [
    {
      title: 'ToDo',
      todos:[
        {
        id:'1',
        title:'Curso CDK angular Tailwin'
        },
        {
        id:'2',
        title:'microfronends bc'
        }
      ]
    },
    {
      title: 'Doing',
      todos:[
        {
          id:'3',
          title:'Actividades Ministerio'
        }
      ]
    },
    {
      title: 'Done',
      todos:[
        {
          id:'4',
          title:'Lazy Loading en angular'
        }
      ]
    }
  ];

  drop(event:CdkDragDrop<ToDo[]>){
    if(event.previousContainer === event.container){
      moveItemInArray(event.container.data,event.previousIndex,event.currentIndex);
    }else{
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    console.log(event);
    //moveItemInArray(this.todos,event.previousIndex,event.currentIndex);

  }

  addColumn(){
    this.columns.push({
      title:'New Column',
      todos:[]
    });
  }

  openDialog(todo:ToDo){
    const dialogRef =this.dialog.open(TodoDialogComponent,
      {
        minWidth:'300px',
        maxWidth:'50%',
        data:{
          todo:todo,
        }
      }
    );

    dialogRef.closed.subscribe(output=>{
      console.log(output);
    });
  }
}
