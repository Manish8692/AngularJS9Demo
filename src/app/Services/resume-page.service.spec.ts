import { TestBed } from '@angular/core/testing';

import { ResumePageService } from './resume-page.service';

describe('ResumePageService', () => {
  let service: ResumePageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResumePageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
