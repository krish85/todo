import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class DataService implements InMemoryDbService {
  constructor() {}

  createDb() {
    return {
      tasks: [
        {
          id: '6',
          title: 'task1',
          owner: 'Suresh K',
          createdAt: '6/7/2022 10.15AM',
        },
        {
          id: '7',
          title: 'task2',
          owner: 'Suresh K',
          createdAt: '6/8/2022 11.15AM',
        },
        {
          id: '8',
          title: 'task3',
          owner: 'Suresh K',
          createdAt: '6/9/2022 10.15AM',
        },
        {
          id: '9',
          title: 'task4',
          owner: 'Suresh K',
          createdAt: '6/7/2022 12.15AM',
        },
      ],
    };
  }
}
