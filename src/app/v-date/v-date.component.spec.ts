import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VDateComponent } from './v-date.component';

describe('VDateComponent', () => {
  let component: VDateComponent;
  let fixture: ComponentFixture<VDateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VDateComponent]
    });
    fixture = TestBed.createComponent(VDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
