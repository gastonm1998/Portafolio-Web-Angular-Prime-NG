import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EInformacionLinkedInComponent } from './e-informacion-linked-in.component';

describe('EInformacionLinkedInComponent', () => {
  let component: EInformacionLinkedInComponent;
  let fixture: ComponentFixture<EInformacionLinkedInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EInformacionLinkedInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EInformacionLinkedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
