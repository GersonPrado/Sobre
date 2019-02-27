import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {Basic_Component} from './FactoryComponents/basic_component';
import { BasicComponentCliComponent } from './basic-component-cli/basic-component-cli.component'

@NgModule({
  declarations: [
    AppComponent,
    Basic_Component,
    BasicComponentCliComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
