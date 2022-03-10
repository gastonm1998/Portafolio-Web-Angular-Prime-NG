import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AHtmlCssComponent } from './a-html-css.component';

describe('AHtmlCssComponent', () => {
  let component: AHtmlCssComponent;
  let fixture: ComponentFixture<AHtmlCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AHtmlCssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AHtmlCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
