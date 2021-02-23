import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartwatchesComponent } from './smartwatches.component';

describe('SmartwatchesComponent', () => {
  let component: SmartwatchesComponent;
  let fixture: ComponentFixture<SmartwatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartwatchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartwatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
