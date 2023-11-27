import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VDescComponent } from './v-desc.component';

describe('VDescComponent', () => {
  let component: VDescComponent;
  let fixture: ComponentFixture<VDescComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VDescComponent]
    });
    fixture = TestBed.createComponent(VDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
