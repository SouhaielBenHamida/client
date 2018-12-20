import { TestBed } from '@angular/core/testing';

import { HistoriqueSearchService } from './historique-search.service';

describe('HistoriqueSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HistoriqueSearchService = TestBed.get(HistoriqueSearchService);
    expect(service).toBeTruthy();
  });
});
