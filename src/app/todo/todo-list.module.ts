import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoListRoutingModule } from './todo-list-routing.module';
import { TodoListComponent } from './containers/todo-list/todo-list.component';
import { BootstrapInputSearchComponent } from 'src/app/shared/ui-components/bootstrap-input-search/bootstrap-input-search.component';
import { ListItemComponent } from './components/list-item/list-item.component';

@NgModule({
  declarations: [
    TodoListComponent,
    BootstrapInputSearchComponent,
    ListItemComponent,
  ],
  imports: [CommonModule, TodoListRoutingModule],
})
export class TodoListModule {}
