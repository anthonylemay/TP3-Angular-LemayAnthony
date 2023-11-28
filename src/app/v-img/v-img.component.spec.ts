import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VImgComponent } from './v-img.component';

describe('VImgComponent', () => {
  let component: VImgComponent;
  let fixture: ComponentFixture<VImgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VImgComponent]
    });
    fixture = TestBed.createComponent(VImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
