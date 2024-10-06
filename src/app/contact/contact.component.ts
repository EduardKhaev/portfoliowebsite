import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  smiley: string = ':)';

  constructor() {
    this.addInputFocusListeners();
  }

  addInputFocusListeners(): void {
    const inputs = document.querySelectorAll('.input-container input, .input-container textarea');

    inputs.forEach((input) => {
      // Hier den Typ angeben
      const inputElement = input as HTMLInputElement | HTMLTextAreaElement;

      inputElement.addEventListener('focus', () => {
        inputElement.classList.add('focused');
      });

      inputElement.addEventListener('blur', () => {
        if (inputElement.value.trim() === '') {
          inputElement.classList.add('error');
        } else {
          inputElement.classList.remove('error');
        }
      });
    });
  }

  validateForm(event: Event): void {
    event.preventDefault();

    const nameInput = document.getElementById('name') as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const messageInput = document.getElementById('message') as HTMLTextAreaElement;

    let isValid = true;

    if (nameInput.value.trim() === '') {
      nameInput.classList.add('error');
      document.getElementById('name-error')!.style.display = 'block';
      isValid = false;
    } else {
      nameInput.classList.remove('error');
      document.getElementById('name-error')!.style.display = 'none';
    }

    if (emailInput.value.trim() === '') {
      emailInput.classList.add('error');
      document.getElementById('email-error')!.style.display = 'block';
      isValid = false;
    } else {
      emailInput.classList.remove('error');
      document.getElementById('email-error')!.style.display = 'none';
    }

    if (messageInput.value.trim() === '') {
      messageInput.classList.add('error');
      document.getElementById('message-error')!.style.display = 'block';
      isValid = false;
    } else {
      messageInput.classList.remove('error');
      document.getElementById('message-error')!.style.display = 'none';
    }

    if (isValid) {
      console.log('Form submitted successfully!');
    }
  }
}
