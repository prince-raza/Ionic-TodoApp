import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddNewTodoPage } from './add-new-todo.page';

const routes: Routes = [
  {
    path: '',
    component: AddNewTodoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddNewTodoPageRoutingModule {}
