import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VAvisCommentaireComponent } from './v-avis-commentaire.component';

describe('VAvisCommentaireComponent', () => {
  let component: VAvisCommentaireComponent;
  let fixture: ComponentFixture<VAvisCommentaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VAvisCommentaireComponent]
    });
    fixture = TestBed.createComponent(VAvisCommentaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
