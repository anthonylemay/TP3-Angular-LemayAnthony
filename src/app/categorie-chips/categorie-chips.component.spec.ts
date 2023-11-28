import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieChipsComponent } from './categorie-chips.component';

describe('CategorieChipsComponent', () => {
  let component: CategorieChipsComponent;
  let fixture: ComponentFixture<CategorieChipsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategorieChipsComponent]
    });
    fixture = TestBed.createComponent(CategorieChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
