import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VScoreComponent } from './v-score.component';

describe('VScoreComponent', () => {
  let component: VScoreComponent;
  let fixture: ComponentFixture<VScoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VScoreComponent]
    });
    fixture = TestBed.createComponent(VScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
