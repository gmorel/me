import { Component } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import {IconDefinition} from "@fortawesome/fontawesome-common-types";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss',
  ]
})
export class AppComponent {
  faUser: IconDefinition = faUser;
  faLinkedin: IconDefinition = faLinkedin;
  faTwitter: IconDefinition = faTwitter;
  faGithub: IconDefinition = faGithub;
}
