import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';
import { SettingsService } from './services/settings.service';
import { registerLocaleData } from '@angular/common';
import ptBR from '@angular/common/locales/pt';
import { FiltroArrayPipe } from './filtro-array.pipe';
import { FiltroArrayImpuroPipe } from './filtro-array-impuro.pipe'; 
registerLocaleData(ptBR,'pt')

@NgModule({
  declarations: [
    AppComponent,
    ExemplosPipesComponent,
    CamelCasePipe,
    FiltroArrayPipe,
    FiltroArrayImpuroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    SettingsService,
    {
      provide:LOCALE_ID,
      deps: [SettingsService],
      useFactory: (SettingsService) => SettingsService.getLocale()
    }
    /*{
      provide: LOCALE_ID,
      useValue: 'pt-PT'
    }*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
