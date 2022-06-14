import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './api/data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskSettingState } from './todo/state/task-setting.state';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService),
  ],
  providers: [TaskSettingState],
  bootstrap: [AppComponent],
})
export class AppModule {}
