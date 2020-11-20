import { TestBed } from '@angular/core/testing';

import { VehicleAPIService } from './vehicle-api.service';

describe('VehicleAPIService', () => {
  let service: VehicleAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehicleAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
