import { TestBed } from '@angular/core/testing';

import { IsuuesService } from './isuues.service';

describe('IsuuesService', () => {
  let service: IsuuesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsuuesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
