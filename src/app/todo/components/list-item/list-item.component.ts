import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskDatum } from 'src/app/shared/types/task-datum';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements OnInit {
  @Input() listItem: TaskDatum[] = [];

  @Output() onEditEvent: EventEmitter<TaskDatum> =
    new EventEmitter<TaskDatum>();

  @Output() onDeleteEvent: EventEmitter<TaskDatum> =
    new EventEmitter<TaskDatum>();

  constructor() {}

  ngOnInit(): void {}

  onEdit(event: any) {
    this.onEditEvent.emit(event);
  }

  onDelete(event: any) {
    console.log(event);
  }
}
