import { TestBed } from '@angular/core/testing';

import { WetherService } from './wether.service';

describe('WetherService', () => {
  let service: WetherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WetherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
