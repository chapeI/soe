import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LearningComponent } from './learning/learning.component';
import { FormsModule } from '@angular/forms';
import { NamesService } from './names.service';

@NgModule({
  declarations: [
    AppComponent,
    LearningComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    NamesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
