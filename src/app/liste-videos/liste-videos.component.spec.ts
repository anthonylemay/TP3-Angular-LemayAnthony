import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeVideosComponent } from './liste-videos.component';

describe('ListeVideosComponent', () => {
  let component: ListeVideosComponent;
  let fixture: ComponentFixture<ListeVideosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeVideosComponent]
    });
    fixture = TestBed.createComponent(ListeVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
