import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetSelectionComponent } from './planet-selection.component';

describe('PlanetSelectionComponent', () => {
  let component: PlanetSelectionComponent;
  let fixture: ComponentFixture<PlanetSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
