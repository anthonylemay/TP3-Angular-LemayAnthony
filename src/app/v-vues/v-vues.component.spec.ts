import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VVuesComponent } from './v-vues.component';

describe('VVuesComponent', () => {
  let component: VVuesComponent;
  let fixture: ComponentFixture<VVuesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VVuesComponent]
    });
    fixture = TestBed.createComponent(VVuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
