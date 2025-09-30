import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule], // needed for *ngIf
  templateUrl: './home-page.html',
  styleUrls: ['./home-page.scss']
})
export class HomePageComponent {
  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    this.lockScroll(this.isMobileMenuOpen);
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
    this.lockScroll(false);
  }

  // Close menu when a mobile menu link is clicked
  onMobileNavClick() {
    this.closeMobileMenu();
  }

  // Close on ESC
  @HostListener('document:keydown.escape')
  onEsc() { this.closeMobileMenu(); }

  // If user rotates / resizes to desktop, close the mobile menu
  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth >= 992 && this.isMobileMenuOpen) this.closeMobileMenu();
  }

  private lockScroll(lock: boolean) {
    document.documentElement.style.overflow = lock ? 'hidden' : '';
    document.body.style.overflow = lock ? 'hidden' : '';
  }
}
