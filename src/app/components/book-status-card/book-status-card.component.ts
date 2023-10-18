import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book-status-card',
  templateUrl: './book-status-card.component.html',
  styleUrls: ['./book-status-card.component.css'],
})
export class BookStatusCardComponent {
  @Input() bookStatusText?: string;
  @Input() color?: string;
  @Input() url?: string;
  @Input() count?: number;

  constructor() {
    console.table([this.color, this.url, this.count, this.bookStatusText]);
  }
}
