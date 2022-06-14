import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  constructor() {}

  getusers() {
    return of();
  }

  searchUsers(text: string) {
    return of();
  }
}
