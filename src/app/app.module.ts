import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeadLineComponent } from './components/headLine/headLine.component';
import { ResultComponent } from './components/result/result.component';
import { SubHeadLineComponent } from './components/subHeadLine/subHeadLine.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PlanetSelectionComponent } from './components/planet-selection/planet-selection.component';
import { VehicleSelectionComponent } from './components/vehicle-selection/vehicle-selection.component';
import { SelectionComponent } from './components/selection/selection.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeadLineComponent,
    ResultComponent,
    SubHeadLineComponent,
    DashboardComponent,
    PlanetSelectionComponent,
    VehicleSelectionComponent,
    SelectionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
