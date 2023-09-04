import { TestBed } from '@angular/core/testing';

import { OdontologosService } from './odontologos.service';

describe('OdontologosService', () => {
  let service: OdontologosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OdontologosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
