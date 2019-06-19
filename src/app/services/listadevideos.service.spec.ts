import { TestBed } from '@angular/core/testing';

import { ListadevideosService } from './listadevideos.service';

describe('ListadevideosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListadevideosService = TestBed.get(ListadevideosService);
    expect(service).toBeTruthy();
  });
});
