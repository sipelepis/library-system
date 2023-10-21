import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  statusCardMeta: StatusCard[] = [];

  ngOnInit() {
    this.statusCardMeta = [
      {
        bookStatusText: 'Checked Out',
        color: 'blue',
        status: 'checked-out',
        count: 0,
        description: 'Books that are currently lent outside the premises',
      },
      {
        bookStatusText: 'Available',
        color: 'green',
        status: 'available',
        count: 0,
        description: 'Books that are currently available for lending/borrowing',
      },
      {
        bookStatusText: 'On Hold',
        color: 'sky',
        status: 'on-hold',
        count: 0,
        description: 'Books that are currently borrowed by patrons inside',
      },
      {
        bookStatusText: 'Overdue',
        color: 'amber',
        status: 'overdue',
        count: 0,
        description: 'Books lent by patrons past their overdue date',
      },
      {
        bookStatusText: 'Unaccounted',
        color: 'red',
        status: 'unaccounted',
        count: 0,
        description: 'Books that are missing, damaged, or unreturned',
      },
    ];

    this.statusCardMeta[0].bookStatusText
    // do database things and change the count
  }
}

interface StatusCard {
  bookStatusText: string;
  color: string;
  status: string;
  count: number;
  description: string;
}
