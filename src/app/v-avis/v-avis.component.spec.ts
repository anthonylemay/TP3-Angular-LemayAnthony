import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VAvisComponent } from './v-avis.component';

describe('VAvisComponent', () => {
  let component: VAvisComponent;
  let fixture: ComponentFixture<VAvisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VAvisComponent]
    });
    fixture = TestBed.createComponent(VAvisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
