import { Component, Input } from '@angular/core';

import { Task } from '../model/task';

@Component({
  //using commonJS, helps with relative path of files
  moduleId: module.id,
  selector: 'app-card',
  // any templates with more than 3 lines, separate into another template file
  //angular by default, finds file from project directory, NOT current file
  templateUrl: 'card.component.html',
  //styles component needs to be an array, b/c you can have multiple sheets per component
  styleUrls: [ 'card.component.css' ]
})

export class CardComponent { 
  //can pass data into this using Input (first need to import it from angular)
  @Input() task: Task;
}