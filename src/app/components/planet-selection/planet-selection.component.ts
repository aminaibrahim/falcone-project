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

  planetsList;
  filteredList;
  
  constructor(private planetService: PlanetsApiService) { }

  ngOnInit(): void {
    this.getPlanetsList();
  }
  selectedPlanets = new Array;
  
  getPlanetsList() {
    this.planetService.getPlanetsList()
      .subscribe((data: planet[]) =>{

        // this.amina = data.filter((element)=>
        //   this.selectedPlanets.indexOf(element.name)!==1)
        // console.log(this.planetsList);
        this.filteredList=data;
        this.planetsList = data;
      })

  }

  onOptionsSelected(i:number,value:string){
    this.planetService.onPlanetSelected();
    // if(this.selectedPlanets[i]!
    // this.selectedPlanets.splice(i,0,value);
    this.selectedPlanets[i]=value;
    console.log(this.selectedPlanets);
    
     this.planetsList = this.filteredList.filter(element=>{
       console.log(element);
       
       console.log(this.selectedPlanets.indexOf(element.name)==-1);
       return (this.selectedPlanets.indexOf(element.name)==-1)
   
})
}
}
