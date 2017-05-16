import { Component } from '@angular/core';

@Component({
  //using commonJS, helps with relative path of files
  moduleId: module.id,
  selector: 'app-card',
  // any templates with more than 3 lines, separate into another template file
  templateUrl: 'card.component.html',
  styleUrls: [ 'card.component.css' ]
})

export class CardComponent { }