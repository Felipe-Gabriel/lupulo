import { TestBed } from '@angular/core/testing';

import { LupulosService } from './lupulos.service';

describe('LupulosService', () => {
  let service: LupulosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LupulosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
