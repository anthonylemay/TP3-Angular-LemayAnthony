import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoXlComponent } from './video-xl.component';

describe('VideoXlComponent', () => {
  let component: VideoXlComponent;
  let fixture: ComponentFixture<VideoXlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoXlComponent]
    });
    fixture = TestBed.createComponent(VideoXlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
