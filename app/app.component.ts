import { Component } from '@angular/core';

import { Task} from './model/task';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  //for the HTML 
  templateUrl: 'app.component.html',
  styleUrls: [ 'app.component.css' ]
})

export class AppComponent { 
  //use private, so anything outside this component cannot modify the values
  private tasks = [
    new Task(
      "Clean the house",
      false
    ),
    new Task(
      "Do the dishes",
      false
    )
  ]
  //initialize a current task
  private currentTask = new Task(null, false);

  //str? is optional
  addTask(num: number, str?: string) {
    let task = new Task(this.currentTask.content, this.currentTask.complete);
    this.tasks.push(task);
    //to clear the form, since it has 2 way data binding, we can just set the content to null
    this.currentTask.content = null;
  }
}