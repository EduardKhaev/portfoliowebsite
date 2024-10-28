import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuOpen = false;
  activeLink = '';

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  setActiveLink(link: string) {
    this.activeLink = link;
    this.menuOpen = false;

    
    const responsive = window.innerWidth <= 1290;

    if (link === 'link2') { 
      const sectionId = responsive ? 'skillsection2' : 'skillsection1';
      document.querySelector(`#${sectionId}`)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      document.querySelector(`#${link}`)?.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

