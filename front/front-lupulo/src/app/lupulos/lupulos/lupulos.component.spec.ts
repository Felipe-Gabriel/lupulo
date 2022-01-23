import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LupulosComponent } from './lupulos.component';

describe('LupulosComponent', () => {
  let component: LupulosComponent;
  let fixture: ComponentFixture<LupulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LupulosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LupulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
