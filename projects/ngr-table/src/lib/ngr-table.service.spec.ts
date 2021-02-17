import { TestBed } from '@angular/core/testing';

import { NgrTableService } from './ngr-table.service';

describe('NgrTableService', () => {
  let service: NgrTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgrTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
