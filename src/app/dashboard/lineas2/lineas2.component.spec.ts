import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lineas2Component } from './lineas2.component';

describe('Lineas2Component', () => {
  let component: Lineas2Component;
  let fixture: ComponentFixture<Lineas2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lineas2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lineas2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
