import { Component, input } from '@angular/core';
import { DatePipe, NgClass, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'izi-day',
  imports: [NgClass, DatePipe, UpperCasePipe],
  templateUrl: './day.component.html',
  styleUrl: './day.component.css',
})
export class DayComponent {
  date = input<string>('2025-01-01');
  active = input<boolean>(false);
  isFull = input<boolean>(false);
}
