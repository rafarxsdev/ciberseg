import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Section1Component } from './components/section1/section1.component';
import { Section2Component } from './components/section2/section2.component';
import { Section3Component } from './components/section3/section3.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    Section1Component,
    Section2Component,
    Section3Component,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ciberseg';
}
