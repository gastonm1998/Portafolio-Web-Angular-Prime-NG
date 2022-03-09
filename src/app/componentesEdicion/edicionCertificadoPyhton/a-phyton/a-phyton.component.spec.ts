import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APhytonComponent } from './a-phyton.component';

describe('APhytonComponent', () => {
  let component: APhytonComponent;
  let fixture: ComponentFixture<APhytonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ APhytonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(APhytonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
