import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionVideosComponent } from './gestion-videos.component';

describe('GestionVideosComponent', () => {
  let component: GestionVideosComponent;
  let fixture: ComponentFixture<GestionVideosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionVideosComponent]
    });
    fixture = TestBed.createComponent(GestionVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
