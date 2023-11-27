import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VAuteurComponent } from './v-auteur.component';

describe('VAuteurComponent', () => {
  let component: VAuteurComponent;
  let fixture: ComponentFixture<VAuteurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VAuteurComponent]
    });
    fixture = TestBed.createComponent(VAuteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
