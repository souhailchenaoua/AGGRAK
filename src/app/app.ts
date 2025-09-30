import { Component, signal } from '@angular/core';
import { HomePageComponent } from './home-page/home-page';

@Component({
  selector: 'app-root',
  imports: [HomePageComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('aggrak-site');
}
