import { Component, OnInit } from '@angular/core';
import { Serie } from './Serie';
import{dataSeries} from './dataSeries';
import { GetSeriesServiceService } from './getSeries-service.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  series: Array<Serie>=[];

  constructor(private serieServicio: GetSeriesServiceService) { }

  getSeriesList(){
    this.serieServicio.getSeries().subscribe(series=>{
    this.series = series;
    });
    }

    ngOnInit() {
    this.getSeriesList();
    }

  getPromedioTemporadas(): string{
    let suma: number=0;
    let contador: number = 0;
    let promedio:number = 0;
    for(let i= 0; i < this.series.length; i ++)
    {
      contador = i +1;
      suma += this.series[i].seasons;
    }
    promedio = suma/contador;
    return 'Seasons Average ' + promedio;
  }
  /*
  //Metodos
  getSeriesList(): Array<Serie>{
    return dataSeries;
  }

  ngOnInit() {
    this.series=this.getSeriesList();
  }
  */
}
