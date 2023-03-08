import { Component, OnInit } from '@angular/core';
import { FirebaseDataService } from 'src/app/services/firebase-data.service';

@Component({
  selector: 'app-datos-zona',
  templateUrl: './datos-zona.component.html',
  styleUrls: ['./datos-zona.component.scss'],
})
export class DatosZonaComponent implements OnInit {
  data: any;
  constructor(
    public fireService: FirebaseDataService
  ) { 
    this.fireService.getDataGenerales('App/Sensores/Generales')
      .subscribe(data => this.data = data);
  }

  ngOnInit() {}

}
