import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  smiley: string = ':)';

  http = inject(HttpClient);

  contactData = {
    name:"",
    email:"",
    message:"",
    checkbox: false
  }
  onSubmit(){
  console.log("läuft");
  }
}
