import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { TaskDatum } from 'src/app/shared/types/task-datum';
import { TaskAPIService } from './api/task.service';
import { TaskSettingState } from './state/task-setting.state';

@Injectable({
  providedIn: 'root',
})
export class TodoFacade {
  constructor(
    private taskAPI: TaskAPIService,
    private taskSettingState: TaskSettingState
  ) {}

  /**
   *
   * @returns
   */
  loadTasks() {
    this.taskAPI
      .getTasks()
      .subscribe((tasks) => this.taskSettingState.setTasks(tasks));
  }

  /**
   *
   * @returns
   */
  getTasks(): Observable<TaskDatum[]> {
    return this.taskSettingState.getTasks$();
  }

  //Optimistic update
  addTask(taskTitle: string) {
    const task = {
      id: '1',
      title: taskTitle,
      owner: 'Suresh K',
      createdAt: '6/14/2022 4.50pm',
    };
    this.taskSettingState.addTask(task);
    this.taskAPI.createTask(task).subscribe(
      () => {
        console.log(task);
      },
      (error: any) => {
        this.taskSettingState.removeTask(task);
        console.log(error);
      }
    );
  }

  //Pesimistic update
  editTask(task: TaskDatum) {
    const title = 'New Title';
    const taskUpdate = {
      ...task,
      title,
    };
    console.log(taskUpdate);

    this.taskAPI.editTask(taskUpdate).subscribe(
      () => {
        this.taskSettingState.updateTask(taskUpdate);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
