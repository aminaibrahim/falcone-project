import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { planet, PlanetsApiService } from 'src/app/services/planets-api/planets-api.service';

@Component({
  selector: 'app-planet-selection',
  templateUrl: './planet-selection.component.html',
  styleUrls: ['./planet-selection.component.css']
})
export class PlanetSelectionComponent implements OnInit {


  planetsList;

  
  constructor(private planetService: PlanetsApiService) { }

  ngOnInit(): void {
    this.getPlanetsList();
  }
  selectedPlanets = new Array;
  
  getPlanetsList() {
    this.planetService.getPlanetsList()
      .subscribe((data: planet[]) =>{

        this.planetsList = data.filter((element)=>
          this.selectedPlanets.indexOf(element.name)!==1)
        console.log(this.planetsList);
        
      })

  }

  onOptionsSelected(value:string){
    console.log(value);
    
    this.planetService.onPlanetSelected();
    this.selectedPlanets.push(value);
    this.getPlanetsList();
}

}
