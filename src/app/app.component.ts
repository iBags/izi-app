import { Component } from '@angular/core';
import { LayoutComponent } from './components/layout/layout.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'izi-root',
  imports: [LayoutComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'izi-app';
}
