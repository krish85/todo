import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { UserApiService } from '../api/user-api.service';

export interface User {
  name: string;
}

@Injectable()
export class UsersFacade {
  private users$: Observable<User[]>;

  constructor(private userApi: UserApiService) {
    this.users$ = this.userApi.getusers().pipe(shareReplay(1)); // cache the data
  }

  getusers() {
    return this.users$;
  }

  searchUsers(search: string): Observable<User[]> {
    return this.userApi.searchUsers(search);
  }
}
