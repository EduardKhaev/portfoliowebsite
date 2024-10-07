import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-references',
  standalone: true, // Stelle sicher, dass dies hier gesetzt ist
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
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
