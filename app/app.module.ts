import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }   from '@angular/forms';
//import { IsairActivityFormComponent } from './isairactivity-form.component';

@NgModule({
    imports: [
              BrowserModule,
              FormsModule
            ],
            declarations: [
              AppComponent
//              IsairActivityFormComponent
            ],
            bootstrap: [ AppComponent ]
})
export class AppModule { }
