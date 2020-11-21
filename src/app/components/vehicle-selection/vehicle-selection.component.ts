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
  vehiclesList :vehicle[]= new Array;
  selectedVehicles:vehicle[]= new Array;
  availableVehicles = new Array;
  constructor(private planetService: PlanetsApiService,
    private vehicleService: VehiclesAPIService) { }

  ngOnInit(): void {
console.log('amina');
this.getVehiclesList();

    this.planetService.isPlanetSelected.subscribe((data)=>{
      this.selectedPlanets = data;
      
    })
   
  }
  onItemChange(index,value){
    console.log(" Value is : ",index, value );
    this.selectedVehicles[index]= value;
    console.log(this.selectedVehicles);
    this.amina[index]=this.availableVehicles.map((element,i)=>{
    
      
        if (value===element.name) {
          return {
            ...element,
            total_no: element.total_no -1
          }
        }
        else {
          return element
        }
      
      }).filter((element=>element.total_no!==0))
console.log(this.availableVehicles);

    
    
 }

  getVehiclesList() {
    this.vehicleService.getVehiclesListFromAPI()
      .subscribe((data: vehicle[]) => {
        this.vehiclesList = data;
        this.availableVehicles = data;
      })
  }

}

