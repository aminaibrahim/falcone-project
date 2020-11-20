import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubHeadLineComponent } from './subHeadLine.component';

describe('SubHeadLineComponent', () => {
  let component: SubHeadLineComponent;
  let fixture: ComponentFixture<SubHeadLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubHeadLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubHeadLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
