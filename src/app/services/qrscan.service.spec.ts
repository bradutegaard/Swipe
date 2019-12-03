import { TestBed } from '@angular/core/testing';

import { QRScanService } from './qrscan.service';

describe('QRScanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QRScanService = TestBed.get(QRScanService);
    expect(service).toBeTruthy();
  });
});
