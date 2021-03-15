import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-new-todo',
  templateUrl: './add-new-todo.page.html',
  styleUrls: ['./add-new-todo.page.scss'],
})
export class AddNewTodoPage implements OnInit {
  categories = ['work','personal','home']

  taskName
  taskDate
  taskPriority
  taskCategory

  taskObject

  constructor(public modalCtrl:ModalController) { }

  ngOnInit() {
  }

  async closeModal(){
    await this.modalCtrl.dismiss(this.taskObject)

  }

  selectedCategory(index){
    this.taskCategory =this.categories[index]

  }

  addTask(){
    this.taskObject =({itemName:this.taskName, 
                       itemDueDate:this.taskDate,
                       itemPriority:this.taskPriority,
                       itemCategory:this.taskCategory})

                      this.closeModal()
    }
  }

