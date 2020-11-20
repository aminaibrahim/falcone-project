import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


 export interface vehicle {
  name: string;
 total_no: number;
 max_distance: number;
 speed: number
}


@Injectable({
  providedIn: 'root'
})
export class VehiclesAPIService {
  vehicle_API_URL = 'https://findfalcone.herokuapp.com/vehicles';

  constructor(private http: HttpClient) { }



  getVehiclesListFromAPI(){
      return this.http.get<vehicle[]>(this.vehicle_API_URL);
    }
}