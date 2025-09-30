import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.html',
  styleUrls: ['./home-page.scss']
})
export class HomePageComponent {
  // simple stubs for menu actions (wire to router later)
  onGetOnboarded() { this.onBookNow(); }
onTrackStorage() { /* route to tracking page */ }
  onBookNow() {  }
  lang = 'Eng';
}