import {faAd, faCoffee} from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook,faInstagram, faAngular  } from '@fortawesome/free-brands-svg-icons';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
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
