import { Component, Directive } from '@angular/core';
import {faAd, faCoffee} from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faInstagram, faAngular } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'FirstBot';
  faCoffee = faCoffee;
  faTwitter = faTwitter;
  faAd = faAd;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  show = true;
  faAngular = faAngular;
}
