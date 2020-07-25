import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuillModule } from 'ngx-quill';

@NgModule({
  imports:[ 
    BrowserModule, 
    FormsModule,
    QuillModule.forRoot({
      customOptions: [
        {
          import: 'formats/font',
          whitelist: ['roboto'],
        },
      ],
    })
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
