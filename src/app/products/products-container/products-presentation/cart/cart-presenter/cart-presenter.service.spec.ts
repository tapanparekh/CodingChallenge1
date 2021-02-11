import { TestBed } from '@angular/core/testing';

import { CartPresenterService } from './cart-presenter.service';

describe('CartPresenterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CartPresenterService = TestBed.get(CartPresenterService);
    expect(service).toBeTruthy();
  });
});
