import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VImgXlComponent } from './v-img-xl.component';

describe('VImgXlComponent', () => {
  let component: VImgXlComponent;
  let fixture: ComponentFixture<VImgXlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VImgXlComponent]
    });
    fixture = TestBed.createComponent(VImgXlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
