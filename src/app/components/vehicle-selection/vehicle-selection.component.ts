import { Component, OnInit } from '@angular/core';
import { PlanetsApiService } from 'src/app/services/planets-api/planets-api.service';
import { vehicle, VehiclesAPIService } from 'src/app/services/vehicles-api/vehicle-api.service';

@Component({
  selector: 'app-vehicle-selection',
  templateUrl: './vehicle-selection.component.html',
  styleUrls: ['./vehicle-selection.component.css']
})
export class VehicleSelectionComponent implements OnInit {

  selectedPlanets = new Array;
  choices = [1,2,3,4]
  vehicleList;
  constructor(private planetService: PlanetsApiService,
    private vehicleService: VehiclesAPIService) { }

  ngOnInit(): void {

    this.planetService.isPlanetSelected.subscribe((data)=>{
      this.selectedPlanets = data;
        this.getVehiclesList();
      
    })
   
  }
  onItemChange(i,value){
    console.log(" Value is : ",i, value );
 }

  getVehiclesList() {
    this.vehicleService.getVehiclesListFromAPI()
      .subscribe((data: vehicle[]) => 
        this.vehicleList = data)
  }

}

