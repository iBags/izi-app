import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'izi-stepper',
  imports: [NgClass, IconComponent],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.css',
})
export class StepperComponent {
  steps = input<number>(5);
  currentStep = input<number>(3);
  title = input<string>('');
  protected readonly Array = Array;
}
