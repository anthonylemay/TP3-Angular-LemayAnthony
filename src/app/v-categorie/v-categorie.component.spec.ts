import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VCategorieComponent } from './v-categorie.component';

describe('VCategorieComponent', () => {
  let component: VCategorieComponent;
  let fixture: ComponentFixture<VCategorieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VCategorieComponent]
    });
    fixture = TestBed.createComponent(VCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
