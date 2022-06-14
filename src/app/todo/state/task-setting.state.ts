import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TaskDatum } from 'src/app/shared/types/task-datum';

@Injectable({
  providedIn: 'root',
})
export class TaskSettingState {
  private updating$ = new BehaviorSubject<boolean>(false);
  private taskList$ = new BehaviorSubject<TaskDatum[]>([]);

  /**
   *
   * @returns
   */
  isUpdating$() {
    return this.updating$.asObservable();
  }

  /**
   *
   * @param isUpdating
   */
  setUpdating(isUpdating: boolean) {
    this.updating$.next(isUpdating);
  }

  /**
   *
   * @returns
   */
  getTasks$() {
    this.taskList$.subscribe((val) => console.log(val));

    return this.taskList$.asObservable();
  }

  /**
   *
   * @param tasks
   */
  setTasks(tasks: TaskDatum[]) {
    this.taskList$.next(tasks);
  }

  /**
   *
   * @param task
   */
  addTask(task: TaskDatum) {
    const currentTasks = this.taskList$.getValue();
    this.taskList$.next([...currentTasks, task]);
  }

  /**
   *
   * @param updatedTask
   */
  updateTask(updatedTask: TaskDatum) {
    const tasks = this.taskList$.getValue();
    const indexOfUpdated = tasks.findIndex(
      (task) => task.id === updatedTask.id
    );
    tasks[indexOfUpdated] = updatedTask;
    this.taskList$.next([...tasks]);
  }

  /**
   *
   * @param taskToRemove
   */
  removeTask(taskToRemove: TaskDatum) {
    const currentValue = this.taskList$.getValue();
    this.taskList$.next(
      currentValue.filter((category) => category !== taskToRemove)
    );
  }
}
