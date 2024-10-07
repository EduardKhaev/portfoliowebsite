import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-myskills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './myskills.component.html',
  styleUrls: ['./myskills.component.scss']
})
export class MyskillsComponent implements AfterViewInit {
  @ViewChild('lastskill', { static: true }) lastSkillItem!: ElementRef;
  @ViewChild('hoverImage', { static: true }) hoverImage!: ElementRef;
  @ViewChild('lastSkillImg', { static: true }) lastSkillImg!: ElementRef;
  @ViewChild('lastSkillText', { static: true }) lastSkillText!: ElementRef;

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

  ngAfterViewInit() {
    this.lastSkillItem.nativeElement.addEventListener('mouseenter', () => {
     
      this.hoverImage.nativeElement.style.opacity = '1';
      this.hoverImage.nativeElement.style.display = 'block';

      
      this.lastSkillImg.nativeElement.src = '../../assets/img/myskills/continuallylearning.png'; 
      this.lastSkillText.nativeElement.style.color = 'white'; 
      this.lastSkillText.nativeElement.style.opacity = '1'; 
    });

    this.lastSkillItem.nativeElement.addEventListener('mouseleave', () => {
      
      this.hoverImage.nativeElement.style.opacity = '0';
      this.hoverImage.nativeElement.style.display = 'none'; 

      
      this.lastSkillImg.nativeElement.src = '../../assets/img/myskills/continuallylearning1.png';
      this.lastSkillText.nativeElement.style.color = '#9747ff'; 
      this.lastSkillText.nativeElement.style.opacity = '1';
    });
  }
}
