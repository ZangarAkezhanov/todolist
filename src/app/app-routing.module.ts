import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './components/pages/todo/todos/todos.component';
import { AboutComponent } from './components/pages/about/about.component';
import { PersonComponent } from './components/pages/persons/person/person.component';
import { PersonsComponent } from './components/pages/persons/persons.component';

const routes: Routes = [
  { path: '', component: TodosComponent},
  { path: 'about', component: AboutComponent},
  { path: 'persons', component: PersonsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
