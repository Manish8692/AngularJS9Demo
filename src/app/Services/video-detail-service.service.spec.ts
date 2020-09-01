import { TestBed } from '@angular/core/testing';

import { VideoDetailServiceService } from './video-detail-service.service';

describe('VideoDetailServiceService', () => {
  let service: VideoDetailServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoDetailServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
