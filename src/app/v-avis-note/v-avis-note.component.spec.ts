import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VAvisNoteComponent } from './v-avis-note.component';

describe('VAvisNoteComponent', () => {
  let component: VAvisNoteComponent;
  let fixture: ComponentFixture<VAvisNoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VAvisNoteComponent]
    });
    fixture = TestBed.createComponent(VAvisNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
