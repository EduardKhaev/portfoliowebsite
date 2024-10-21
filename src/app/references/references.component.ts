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
  currentIndex: number = 0;
  readonly MAX_INDEX = 2;

  ellipsesImages: string[] = [
    'assets/img/slideelements/elipsegreen.png',
    'assets/img/slideelements/elipsepurble.png',
    'assets/img/slideelements/elipsepurble.png'
  ];

  references = [
    {
      text: `Eduard was a very valuable team member who was always friendly and helpful. He worked hard to contribute and was an important part of the team's success. His positive attitude and willingness to work with others made it easier to collaborate and created a nice working environment.`,
      userName: 'Team Partner, Galina Antipin',
      img: '../../assets/img/business-attire-women.jpg'
    },
    {
      text: `It is very easy to work successfully with Eduard. His valuable contributions to the project always met the specifications and integrated seamlessly into the overall work. I was glad to have Eduard on the team.`,
      userName: 'Team Partner, Patrick Schlieker',
      img: 'assets/img/business-attire-men.jpg'
    },
    {
      text: `Eduard was a helpful team member on our project. He always showed himself to be flexible and often stepped in wherever he was needed. His stamina was strong and he remained efficient under pressure. I appreciate his adaptability and the positive attitude he brought to the team.`,
      userName: 'Team Partner, Maximilian Stigler',
      img: 'assets/img/business-attire-women-2.jpg'
    }
  ];

  ngAfterViewInit() {
    this.backarrow.nativeElement.addEventListener('mouseenter', () => {
      this.backarrow.nativeElement.querySelector('img').src = '../../assets/img/slideelements/arrowbackcircled.png';
    });
    this.backarrow.nativeElement.addEventListener('mouseleave', () => {
      this.backarrow.nativeElement.querySelector('img').src = '../../assets/img/slideelements/arrowback.png';
    });

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
