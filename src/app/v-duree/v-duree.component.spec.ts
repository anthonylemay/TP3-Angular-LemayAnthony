import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VDureeComponent } from './v-duree.component';

describe('VDureeComponent', () => {
  let component: VDureeComponent;
  let fixture: ComponentFixture<VDureeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VDureeComponent]
    });
    fixture = TestBed.createComponent(VDureeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
