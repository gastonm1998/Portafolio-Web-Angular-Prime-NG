import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EIoTComponent } from './e-io-t.component';

describe('EIoTComponent', () => {
  let component: EIoTComponent;
  let fixture: ComponentFixture<EIoTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EIoTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EIoTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
