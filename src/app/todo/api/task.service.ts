import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { TaskDatum } from 'src/app/shared/types/task-datum';

@Injectable({
  providedIn: 'root',
})
export class TaskAPIService {
  private tasksUrl = 'api/tasks/';

  constructor(private http: HttpClient) {}

  getTasks() {
    return this.http.get<TaskDatum[]>(this.tasksUrl).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(() => {
          return error;
        });
      })
    );
  }

  /**
   *
   * @param task
   * @returns
   */
  createTask(task: TaskDatum): Observable<TaskDatum> {
    return this.http.post<TaskDatum>(this.tasksUrl, task).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(() => new Error('error while creating'));
      })
    );
  }

  editTask(task: TaskDatum): Observable<any> {
    return this.http.put(this.tasksUrl + task.id, task);
  }

  deleteTask(id: number): Observable<any> {
    return this.http.delete(this.tasksUrl + id);
  }
}
