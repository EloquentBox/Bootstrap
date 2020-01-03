import { Component, OnInit } from '@angular/core';
import { faTwitter, faFacebook,faInstagram, faAngular  } from '@fortawesome/free-brands-svg-icons';
import {faAd, faCoffee} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  faCoffee = faCoffee;
  faTwitter = faTwitter;
  faAd = faAd;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faAngular = faAngular;
  constructor() { }

  ngOnInit() {
  }

}
