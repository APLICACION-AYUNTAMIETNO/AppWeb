import { TestBed } from '@angular/core/testing';

import { IdentificarteService } from './identificarte.service';

describe('IdentificarteService', () => {
  let service: IdentificarteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdentificarteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
