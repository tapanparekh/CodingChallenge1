import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartPresentationComponent } from './cart-presentation.component';

describe('CartPresentationComponent', () => {
  let component: CartPresentationComponent;
  let fixture: ComponentFixture<CartPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
