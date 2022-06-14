import { Component, OnInit } from '@angular/core';
import { TaskDatum } from 'src/app/shared/types/task-datum';
import { TodoFacade } from '../../todo.facade';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  taskList: any[] = [];

  /**
   * Container all comm via facade
   * @param todoFacade
   */
  constructor(private todoFacade: TodoFacade) {
    this.todoFacade.getTasks().subscribe((tasks: TaskDatum[]) => {
      this.taskList = tasks;
    });
  }

  ngOnInit(): void {
    this.todoFacade.loadTasks();
  }

  onAdd(tilteText: any) {
    this.todoFacade.addTask(tilteText);
  }

  onEdit(task: any) {
    this.todoFacade.editTask(task);
  }

  onDelete(task: any) {
    this.todoFacade.addTask(task);
  }
}
