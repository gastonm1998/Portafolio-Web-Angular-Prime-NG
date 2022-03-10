import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EHtmlCssComponent } from './e-html-css.component';

describe('EHtmlCssComponent', () => {
  let component: EHtmlCssComponent;
  let fixture: ComponentFixture<EHtmlCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EHtmlCssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EHtmlCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
