import { Component, computed, input } from '@angular/core';
import {
  ButtonSize,
  ButtonTheme,
  TSemanticSize,
  TSemanticTheme,
} from './button.constants';
import { NgClass } from '@angular/common';

@Component({
  selector: 'izi-button',
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  theme = input<TSemanticTheme>(ButtonTheme.PRIMARY);
  size = input<TSemanticSize>(ButtonSize.MEDIUM);
  extraClasses = input<string>('');
  block = input<boolean>(false);
  colorClasses = computed<string>(() => {
    if (this.theme() === ButtonTheme.PRIMARY) {
      return 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700';
    }

    if (this.theme() === ButtonTheme.SECONDARY) {
      return 'text-blue-600 border-gray-300 hover:bg-gray-100';
    }
    if (this.theme() === ButtonTheme.TERTIARY) {
      return 'text-gray-600 border-gray-300 hover:border-blue-600 hover:text-blue-600';
    }
    return 'text-gray-800 border-transparent hover:bg-gray-100 ';
  });
  sizeClasses = computed<string>(() => {
    if (this.size() === ButtonSize.SMALL) {
      return 'py-2.5';
    }
    if (this.size() === ButtonSize.MEDIUM) {
      return 'py-3';
    }
    return 'py-3.5';
  });

  buttonClasses = computed<string>(() => {
    return [
      this.colorClasses(),
      this.sizeClasses(),
      this.extraClasses(),
      this.block() ? 'block w-full' : 'inline',
    ].join(' ');
  });
}
