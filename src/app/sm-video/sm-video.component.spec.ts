import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmVideoComponent } from './sm-video.component';

describe('SmVideoComponent', () => {
  let component: SmVideoComponent;
  let fixture: ComponentFixture<SmVideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmVideoComponent]
    });
    fixture = TestBed.createComponent(SmVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
