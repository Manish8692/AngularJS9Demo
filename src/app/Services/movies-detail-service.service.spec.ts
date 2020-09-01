import { TestBed } from '@angular/core/testing';

import { MoviesDetailServiceService } from './movies-detail-service.service';

describe('MoviesDetailServiceService', () => {
  let service: MoviesDetailServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesDetailServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
