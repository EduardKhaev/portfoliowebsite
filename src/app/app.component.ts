import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { MyskillsComponent } from './myskills/myskills.component';
import { RouterOutlet } from '@angular/router';
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { PortfolioHeaderComponent } from "./portfolio-header/portfolio-header.component";
import { ReferencesComponent } from "./references/references.component";
import { ContactHeaderComponent } from "./contact-header/contact-header.component";
import { ContactComponent } from "./contact/contact.component";
import { FooterComponent } from "./footer/footer.component";




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    AboutmeComponent,
    MyskillsComponent,
    PortfolioComponent,
    PortfolioHeaderComponent,
    ReferencesComponent,
    ContactHeaderComponent,
    ContactComponent, 
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfoliowebsite';
  
}
