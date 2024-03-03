import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheVideoComponent } from './fiche-video.component';

describe('FicheVideoComponent', () => {
  let component: FicheVideoComponent;
  let fixture: ComponentFixture<FicheVideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FicheVideoComponent]
    });
    fixture = TestBed.createComponent(FicheVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
