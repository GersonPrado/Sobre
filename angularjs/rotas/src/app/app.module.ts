import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AlunosModel } from './alunos/alunos.models';
import { CursosModel } from './cursos/cursos.models';
import { routing } from './app.routing';
import { AuthService } from './login/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { PagenotFoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PagenotFoundComponent            
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CursosModel,
    AlunosModel,    
    routing
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
