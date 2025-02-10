import { Component } from '@angular/core';
import { ButtonComponent } from './ui/button/button.component';
import { ButtonGroupComponent } from './ui/button-group/button-group.component';
import { LayoutComponent } from './components/layout/layout.component';
import { DaySelectorComponent } from './ui/calendar/day-selector/day-selector.component';
import { ContainerComponent } from './components/container/container.component';
import { StepperComponent } from './ui/stepper/stepper.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'izi-root',
  imports: [
    ButtonComponent,
    ButtonGroupComponent,
    LayoutComponent,
    DaySelectorComponent,
    ContainerComponent,
    StepperComponent,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'izi-app';
}
