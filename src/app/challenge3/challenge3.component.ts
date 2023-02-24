import { Component } from '@angular/core';

@Component({
  selector: 'app-challenge3',
  templateUrl: './challenge3.component.html',
  styleUrls: ['./challenge3.component.css'],
})
export class Challenge3Component {
  secret = false;
  secretLog = [];
  secretCounter = 0;

  onToggleSecret() {
    this.secret = !this.secret;
    this.secretLog.push(this.secretCounter++);
  }
}
