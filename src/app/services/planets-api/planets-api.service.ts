import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';


 export interface planet {
  name: string;
  distance: number;
}


@Injectable({
  providedIn: 'root'
})
export class PlanetsApiService {
  isPlanetSelected= new Subject<any>();
  planets_API_URL = 'https://findfalcone.herokuapp.com/planets';

  constructor(private http: HttpClient) { }



  getPlanetsList(){
      return this.http.get<planet[]>(this.planets_API_URL);
    }

    onPlanetSelected(index){
      this.isPlanetSelected.next(index);
    }
}
