import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EPhytonComponent } from './e-phyton.component';

describe('EPhytonComponent', () => {
  let component: EPhytonComponent;
  let fixture: ComponentFixture<EPhytonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EPhytonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EPhytonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
