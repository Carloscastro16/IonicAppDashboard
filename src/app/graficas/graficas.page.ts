import { AfterViewInit, Component, ElementRef,OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { AuthenticationService } from '../services/auth.service';
import { FirebaseDataService } from '../services/firebase-data.service';
@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.page.html',
  styleUrls: ['./graficas.page.scss', '../app.component.scss'],
})
export class GraficasPage implements AfterViewInit {
  // Importing ViewChild. We need @ViewChild decorator to get a reference to the local variable 
  // that we have added to the canvas element in the HTML template.
  @ViewChild('doughnutCanvas') private doughnutCanvas!: ElementRef;
  @ViewChild('lineCanvas') private lineCanvas!: ElementRef;
  doughnutChart: any;
  lineChart: any;
  datosG: any;
  constructor(
    public authService: AuthenticationService,
    public fireService: FirebaseDataService
  ) {
    this.fireService.getDataGenerales('App/detecciones/').subscribe(data => {
    this.datosG = data;
    this.doughnutChartMethod();
    this.lineChartMethod();
    });
    
  }
  // When we try to call our chart to initialize methods in ngOnInit() it shows an error nativeElement of undefined. 
  // So, we need to call all chart methods in ngAfterViewInit() where @ViewChild and @ViewChildren will be resolved.
  ngAfterViewInit() {
    this.doughnutChartMethod();
    this.lineChartMethod();
  }
  doughnutChartMethod() {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: Object.keys(this.datosG.part),
        datasets: [{
          label: '# of Votes',
          data: Object.values(this.datosG.part),
          backgroundColor: [
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
          ],
          hoverBackgroundColor: [
            '#FFCE56',
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#FF6384'
          ]
        }]
      }
    });
  }
  lineChartMethod() {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: Object.keys(this.datosG.part),
        datasets: [
          {
            label: 'Sell per week',
            fill: false,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: '#0e310d',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#0e310d',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: '#0e310d',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: Object.values(this.datosG.part),
            spanGaps: false,
          }
        ]
      }
    });
  }

  
}