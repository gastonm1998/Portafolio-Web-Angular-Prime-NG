import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EInformacionEmailComponent } from './e-informacion-email.component';

describe('EInformacionEmailComponent', () => {
  let component: EInformacionEmailComponent;
  let fixture: ComponentFixture<EInformacionEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EInformacionEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EInformacionEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
