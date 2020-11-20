import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { planet, PlanetsApiService } from 'src/app/services/planets-api/planets-api.service';

@Component({
  selector: 'app-planet-selection',
  templateUrl: './planet-selection.component.html',
  styleUrls: ['./planet-selection.component.css']
})
export class PlanetSelectionComponent implements OnInit {
  choiceList=[1,2,3,4]
  allPlanetsList = new Array;
  availablePlanetsList = new Array;

  selectedPlanets = new Array;
  
  
  constructor(private planetService: PlanetsApiService) { }

  ngOnInit(): void {
    this.getPlanetsList();
  }
  

  getPlanetsList() {
    this.planetService.getPlanetsList()
      .subscribe((data: planet[]) =>{
        this.allPlanetsList = data;
        this.availablePlanetsList=data;
        
      })

  }

  onOptionsSelected(i:number,value:string){
    

    this.planetService.onPlanetSelected();
    
    this.selectedPlanets[i]=value;
    
     this.availablePlanetsList = this.allPlanetsList.filter(element=> (this.selectedPlanets.indexOf(element.name)==-1)
   )
}
}
