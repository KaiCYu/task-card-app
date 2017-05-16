import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';

//decorator 
@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent,
                  CardComponent
                ],
  bootstrap: [ AppComponent ], 
})

export class AppModule { }