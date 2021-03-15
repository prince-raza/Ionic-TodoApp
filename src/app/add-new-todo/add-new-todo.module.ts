import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddNewTodoPageRoutingModule } from './add-new-todo-routing.module';

import { AddNewTodoPage } from './add-new-todo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddNewTodoPageRoutingModule
  ],
  declarations: [AddNewTodoPage]
})
export class AddNewTodoPageModule {}
