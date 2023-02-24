import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { HeaderComponent } from './header/header.component';
import { BasicsComponent } from './basics/basics.component';
import { FormsComponent } from './forms/forms.component';
import { IplstatsComponent } from './iplstats/iplstats.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    HeaderComponent,
    BasicsComponent,
    FormsComponent,
    IplstatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
