import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartedlistComponent } from './cartedlist.component';

describe('CartedlistComponent', () => {
  let component: CartedlistComponent;
  let fixture: ComponentFixture<CartedlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartedlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartedlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
