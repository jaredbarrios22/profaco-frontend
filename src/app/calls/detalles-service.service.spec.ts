import { TestBed } from '@angular/core/testing';

import { DetallesServiceService } from './detalles-service.service';

describe('DetallesServiceService', () => {
  let service: DetallesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetallesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
