import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookStatusCardComponent } from './book-status-card.component';

describe('BookStatusCardComponent', () => {
  let component: BookStatusCardComponent;
  let fixture: ComponentFixture<BookStatusCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookStatusCardComponent]
    });
    fixture = TestBed.createComponent(BookStatusCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
