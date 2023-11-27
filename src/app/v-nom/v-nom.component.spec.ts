import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VNomComponent } from './v-nom.component';

describe('VNomComponent', () => {
  let component: VNomComponent;
  let fixture: ComponentFixture<VNomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VNomComponent]
    });
    fixture = TestBed.createComponent(VNomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
