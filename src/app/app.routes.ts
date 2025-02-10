import { Routes } from '@angular/router';
import { SecondStepComponent } from './pages/second-step/second-step.component';
import { FirstStepComponent } from './pages/first-step/first-step.component';

export const routes: Routes = [
  { path: 'first-step', component: FirstStepComponent },
  { path: 'second-step', component: SecondStepComponent },
];
