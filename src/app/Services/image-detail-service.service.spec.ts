import { TestBed } from '@angular/core/testing';

import { ImageDetailServiceService } from './image-detail-service.service';

describe('ImageDetailServiceService', () => {
  let service: ImageDetailServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageDetailServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
