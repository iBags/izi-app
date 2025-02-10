import { Component, input } from '@angular/core';
import { NgStyle } from '@angular/common';
import { TIcon } from './icon.constants';

@Component({
  selector: 'izi-icon',
  imports: [NgStyle],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.css',
})
export class IconComponent {
  size = input<number>(24);
  icon = input<TIcon>('check');
}
