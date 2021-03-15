import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddNewTodoPage } from '../add-new-todo/add-new-todo.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  todoList=[{
    itemName: 'Coding',
    itemDueDate :'01-01-2021',
    itemPriority: 'High',
    itemCategory: 'Work'
  },
  {
    itemName: 'Design',
    itemDueDate :'01-02-2021',
    itemPriority: 'Low',
    itemCategory: 'Work'
  },
  {
    itemName: 'Cooking',
    itemDueDate :'01-03-2021',
    itemPriority: 'Moderate',
    itemCategory: 'Personal'
  },

]

  today : number = Date.now()

  constructor(public modalCtrl:ModalController) {}

  async addTodo(){
    const modal = await this.modalCtrl.create({
      component :AddNewTodoPage
    })

    modal.onDidDismiss().then(newTaskObj => {
      console.log(newTaskObj.data);
      this.todoList.push(newTaskObj.data)
    })
    return await modal.present()
  }

  delete(index){
    this.todoList.splice(index,1)
  }

}
