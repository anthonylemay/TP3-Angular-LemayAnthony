import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedcaptionComponent } from './closedcaption.component';

describe('ClosedcaptionComponent', () => {
  let component: ClosedcaptionComponent;
  let fixture: ComponentFixture<ClosedcaptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClosedcaptionComponent]
    });
    fixture = TestBed.createComponent(ClosedcaptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
