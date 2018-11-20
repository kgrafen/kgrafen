import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisjaComponent } from './misja.component';

describe('MisjaComponent', () => {
  let component: MisjaComponent;
  let fixture: ComponentFixture<MisjaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisjaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
