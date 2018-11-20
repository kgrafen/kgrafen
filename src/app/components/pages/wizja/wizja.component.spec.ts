import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizjaComponent } from './wizja.component';

describe('WizjaComponent', () => {
  let component: WizjaComponent;
  let fixture: ComponentFixture<WizjaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizjaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
