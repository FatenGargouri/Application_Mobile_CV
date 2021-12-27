import { TestBed } from '@angular/core/testing';

import { DiversService } from './divers.service';

describe('DiversService', () => {
  let service: DiversService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiversService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
