import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() statusData!: StatusData;
  @Input() iconComponent!: TemplateRef<any>;

  cardClasses: string = '';
  buttonClasses: string = '';
  titleClasses: string = '';

  ngOnInit(): void {
    this.cardClasses = `p-6 bg-white border border-gray-200 rounded-lg hover:shadow-xl transition-all ease-in dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center justify-around max-w-[18rem] max-h-[16rem] min-w-[18rem] min-h-[16rem] hover:border-${this.statusData.color}-500`;
    this.buttonClasses = `text-white bg-${this.statusData.color}-500 hover:bg-${this.statusData.color}-800 focus:ring-4 focus:ring-${this.statusData.color}-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-${this.statusData.color}-600 dark:hover:bg-${this.statusData.color}-700 focus:outline-none dark:focus:ring-${this.statusData.color}-800`;
    this.titleClasses = `text-2xl font-semibold tracking-tight text-${this.statusData.color}-500 font-heading uppercase dark:text-white inline-flex items-center gap-2`;
  }
}

interface StatusData {
  bookStatusText: string;
  color: string;
  status: string;
  count: number;
  description: string;
}

