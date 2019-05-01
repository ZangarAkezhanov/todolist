import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/pages/todo/todos/todos.component';
import { TodoItemComponent } from './components/pages/todo/todo-item/todo-item.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AddTodoComponent } from './components/pages/todo/add-todo/add-todo.component';
import { from } from 'rxjs';
import { AboutComponent } from './components/pages/about/about.component';
import { PersonsComponent } from './components/pages/persons/persons.component';
import { PersonComponent } from './components/pages/persons/person/person.component';
import { PersonListComponent } from './components/pages/persons/person-list/person-list.component';
import { PersonService } from './services/person.service';


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    HeaderComponent,
    AddTodoComponent,
    AboutComponent,
    PersonsComponent,
    PersonComponent,
    PersonListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
