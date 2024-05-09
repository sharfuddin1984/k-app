import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'k-app'; 
  Claimant: any;
  claimTypeACode: any;
  injuryDamageCode: any;
  linePolicy: any;
  adjuster: any;
  claimDetails: any;
}
