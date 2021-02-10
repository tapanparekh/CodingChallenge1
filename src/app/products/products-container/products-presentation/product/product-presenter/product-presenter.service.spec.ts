import { TestBed } from '@angular/core/testing';

import { ProductPresenterService } from './product-presenter.service';

describe('ProductPresenterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductPresenterService = TestBed.get(ProductPresenterService);
    expect(service).toBeTruthy();
  });
});
