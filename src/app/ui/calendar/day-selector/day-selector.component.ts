import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  output,
  signal,
} from '@angular/core';
import { DayComponent } from '../day/day.component';
import { SelectableDay } from './day-selector.model';
import { ContainerComponent } from '../../../components/container/container.component';
import { register } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
// register Swiper custom elements
register();

@Component({
  selector: 'izi-day-selector',
  imports: [DayComponent, ContainerComponent],
  templateUrl: './day-selector.component.html',
  styleUrl: './day-selector.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DaySelectorComponent implements AfterViewInit {
  selectedDay = output<string>();
  days = signal<SelectableDay[]>([
    {
      date: '2025-01-01',
      active: false,
      isFull: false,
    },
    {
      date: '2025-01-02',
      active: false,
      isFull: false,
    },
    {
      date: '2025-01-03',
      active: false,
      isFull: false,
    },
    {
      date: '2025-01-04',
      active: false,
      isFull: true,
    },
    {
      date: '2025-01-05',
      active: false,
      isFull: false,
    },
    {
      date: '2025-01-06',
      active: false,
      isFull: false,
    },
    {
      date: '2025-01-07',
      active: false,
      isFull: false,
    },
    {
      date: '2025-01-08',
      active: false,
      isFull: false,
    },
    {
      date: '2025-01-09',
      active: false,
      isFull: false,
    },
    {
      date: '2025-01-10',
      active: false,
      isFull: false,
    },
  ]);

  onSelect(day: SelectableDay) {
    this.days.update((currentDays) =>
      currentDays.map((currentDay) => ({
        ...currentDay,
        active: !currentDay.isFull && currentDay.date === day.date,
      }))
    );
    this.selectedDay.emit(day.date);
  }

  ngAfterViewInit() {
    const swiperParams: SwiperOptions = {
      slidesPerView: 5,
      spaceBetween: 16,
      injectStyles: [
        `.swiper {
        overflow: visible;
      }`,
      ],
    };
    const swiperEl: any = document.querySelector('#selector-day');
    Object.assign(swiperEl, swiperParams);

    swiperEl.initialize();
  }
}
