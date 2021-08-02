import { TestBed } from '@angular/core/testing';

import { RadomuserService } from './radomuser.service';

describe('RadomuserService', () => {
  let service: RadomuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RadomuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
