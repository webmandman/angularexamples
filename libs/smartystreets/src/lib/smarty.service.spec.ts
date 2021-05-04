import { TestBed } from '@angular/core/testing';

import { SmartyService } from './smarty.service';

describe('SmartyServiceService', () => {
  let service: SmartyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmartyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
