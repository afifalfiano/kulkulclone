import { Component, OnInit } from '@angular/core';
import { faYoutube, faTwitter, faFacebook, faInstagram, faLinkedin, faGithub, faGit } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faYoutube = faYoutube;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  constructor() { }

  ngOnInit(): void {
  }

}
