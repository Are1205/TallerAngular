/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetSeriesServiceService } from './getSeries-service.service';

describe('Service: GetSeriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetSeriesServiceService]
    });
  });

  it('should ...', inject([GetSeriesServiceService], (service: GetSeriesServiceService) => {
    expect(service).toBeTruthy();
  }));
});
