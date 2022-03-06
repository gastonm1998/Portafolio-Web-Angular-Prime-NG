import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EBannerPrincipalComponent } from './e-banner-principal.component';

describe('EBannerPrincipalComponent', () => {
  let component: EBannerPrincipalComponent;
  let fixture: ComponentFixture<EBannerPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EBannerPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EBannerPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
