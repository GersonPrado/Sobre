import { CalendarioService } from './calendario-service/calendario-service'
import { Component, OnInit } from '@angular/core';
import { Calendario } from './calendario-service/calendario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'calendario';

  calendario:Calendario[];
  constructor(private calendarioService: CalendarioService) { }

  ngOnInit() {
    this.calendarioService.listaCalendario().subscribe(console.log);
  }
}
