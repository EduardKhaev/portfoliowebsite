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

  onFocus(input: any) {
    input.classList.remove('invalid');
  }
  
  onBlur(input: any) {
    // Nutze Angular's Validierung direkt
    if (input.valid) {
      input.classList.add('valid');
      input.classList.remove('invalid');
    } else {
      input.classList.add('invalid');
      input.classList.remove('valid');
    }
  }

  mailTest = true;

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    // Überprüfen, ob das Formular korrekt ausgefüllt ist
    if (ngForm.submitted && ngForm.form.valid) {
      // Beispiel: POST-Request senden, um Daten zu übermitteln
      this.http.post('https://example.com/sendMail.php', this.contactData).subscribe({
        next: (response) => {
          console.log('Form successfully submitted!', response);
          ngForm.resetForm(); // Formular zurücksetzen
        },
        error: (error) => {
          console.error('Error submitting form:', error);
        }
      });
    }
  }
}
