import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Barra2Component } from './barra2.component';

describe('Barra2Component', () => {
  let component: Barra2Component;
  let fixture: ComponentFixture<Barra2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Barra2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Barra2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
