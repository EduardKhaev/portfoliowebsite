import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-references',
  standalone: true, // Stelle sicher, dass dies hier gesetzt ist
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss'],
  imports: [ CommonModule ]
})
export class ReferencesComponent implements AfterViewInit {
  @ViewChild('backarrow', { static: false }) backarrow!: ElementRef;
  @ViewChild('forwardarrow', { static: false }) forwardarrow!: ElementRef;
  currentIndex: number = 0; // Aktueller Index für die Ellipsen
  readonly MAX_INDEX = 2; // Maximaler Index (für 3 Bilder)

  ellipsesImages: string[] = [
    'assets/img/slideelements/elipsegreen.png',
    'assets/img/slideelements/elipsepurble.png',
    'assets/img/slideelements/elipsepurble.png'
  ];

  references = [
    {
      text: `Michael really kept the team together with his great organization and
             clear communication. We wouldn't have got this far without his
             commitment.`,
      userName: 'Team Partner, Lisa Mustermann',
      img: '../../assets/img/business-attire-women.jpg'
    },
    {
      text: `Patrick's leadership skills are amazing. He guided the team through
             complex challenges and always stayed calm and focused.`,
      userName: 'Team Partner, John Doe',
      img: 'assets/img/business-attire-men.jpg'
    },
    {
      text: `Galina's dedication to solving difficult tasks made a huge impact on
             our project's success.`,
      userName: 'Team Partner, Sarah Example',
      img: 'assets/img/business-attire-women-2.jpg'
    }
  ];

  ngAfterViewInit() {
    // Back Arrow Hover-Effekt
    this.backarrow.nativeElement.addEventListener('mouseenter', () => {
      this.backarrow.nativeElement.querySelector('img').src = '../../assets/img/slideelements/arrowbackcircled.png';
    });
    this.backarrow.nativeElement.addEventListener('mouseleave', () => {
      this.backarrow.nativeElement.querySelector('img').src = '../../assets/img/slideelements/arrowback.png';
    });

    // Forward Arrow Hover-Effekt
    this.forwardarrow.nativeElement.addEventListener('mouseenter', () => {
      this.forwardarrow.nativeElement.querySelector('img').src = '../../assets/img/slideelements/arrowforwardcircled.png';
    });
    this.forwardarrow.nativeElement.addEventListener('mouseleave', () => {
      this.forwardarrow.nativeElement.querySelector('img').src = '../../assets/img/slideelements/arrowforward.png';
    });

    // Click-Event für Vorwärts-Pfeil
    this.backarrow.nativeElement.addEventListener('click', () => {
      this.currentIndex++;
      if (this.currentIndex > this.MAX_INDEX) {
        this.currentIndex = 0; // Zurücksetzen auf den ersten Index
      }
      
    });

    // Click-Event für Rückwärts-Pfeil
    this.forwardarrow.nativeElement.addEventListener('click', () => {
      this.currentIndex--;
      if (this.currentIndex < 0) {
        this.currentIndex = this.MAX_INDEX; // Setzt auf den letzten Index zurück
      }
      
    });
  }

  
}
