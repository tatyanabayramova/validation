import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-validation-project';
  regex = '^(https?:\\/\\/)?(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9]*)$';
  isValid = true;

  handleUserChanged(event): void {
    const value = event.detail;
    console.log('---');
    console.log('value', value);
    console.log('---');
  }

  handleValidationChanged(event): void {
    this.isValid = event.detail;
    console.log('---');
    console.log('isValid', this.isValid);
    console.log('---');
  }
}
