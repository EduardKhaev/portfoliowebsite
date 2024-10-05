import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-myskills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './myskills.component.html',
  styleUrls: ['./myskills.component.scss'] // Korrigiert von 'styleUrl' zu 'styleUrls'
})
export class MyskillsComponent {

  myskills = [
    { imgSrc: '../../assets/img/myskills/html.png', name: 'HTML' },
    { imgSrc: '../../assets/img/myskills/css.png', name: 'CSS' },
    { imgSrc: '../../assets/img/myskills/javascript.png', name: 'JavaScript' },
    { imgSrc: '../../assets/img/myskills/typescript.png', name: 'TypeScript' },
    { imgSrc: '../../assets/img/myskills/angular.png', name: 'Angular' },
    { imgSrc: '../../assets/img/myskills/firebase.png', name: 'Firebase' },
    { imgSrc: '../../assets/img/myskills/git.png', name: 'Git' },
    { imgSrc: '../../assets/img/myskills/api.png', name: 'API' },
    { imgSrc: '../../assets/img/myskills/scrum.png', name: 'Scrum' },
    { imgSrc: '../../assets/img/myskills/materialdesign.png', name: 'Material Design' },
    { imgSrc: '../../assets/img/myskills/continuallylearning.png', name: 'Continually Learning' },
  ];
}
