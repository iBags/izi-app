import { Component } from '@angular/core';
import { ButtonComponent } from '../../ui/button/button.component';
import { ButtonGroupComponent } from '../../ui/button-group/button-group.component';
import { ContainerComponent } from '../../components/container/container.component';
import { DaySelectorComponent } from '../../ui/calendar/day-selector/day-selector.component';
import { StepperComponent } from '../../ui/stepper/stepper.component';
import { IconComponent } from '../../ui/icon/icon.component';

@Component({
  selector: 'izi-first-step',
  imports: [
    ButtonComponent,
    ButtonGroupComponent,
    ContainerComponent,
    DaySelectorComponent,
    StepperComponent,
    IconComponent,
  ],
  templateUrl: './first-step.component.html',
  styleUrl: './first-step.component.css',
})
export class FirstStepComponent {}
