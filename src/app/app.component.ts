import {Component, OnInit} from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import {IconDefinition} from "@fortawesome/fontawesome-common-types";
import {Observable} from "rxjs";
import {ScullyRoutesService} from "@scullyio/ng-lib";
import {ScullyRoute} from "@scullyio/ng-lib/lib/route-service/scully-routes.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss',
  ]
})
export class AppComponent implements OnInit {
  faUser: IconDefinition = faUser;
  faLinkedin: IconDefinition = faLinkedin;
  faTwitter: IconDefinition = faTwitter;
  faGithub: IconDefinition = faGithub;

  links$: Observable<ScullyRoute[]> = this.scully.available$;

  constructor(private scully: ScullyRoutesService) {}

  ngOnInit() {
    // debug current pages
    this.links$.subscribe(links => {
      console.log(links);
    });
  }
}
