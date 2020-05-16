import { Component, OnInit } from '@angular/core';
import { faCoffee, faUsers, faSeedling, faFireExtinguisher, faUnlock, faCogs, faStethoscope, faChartLine, faRocket } from '@fortawesome/free-solid-svg-icons';
import {IconDefinition} from "@fortawesome/fontawesome-common-types";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  faCoffee: IconDefinition = faCoffee;
  faUsers: IconDefinition = faUsers;
  faSeedling: IconDefinition = faSeedling;
  faFireExtinguisher: IconDefinition = faFireExtinguisher;
  faUnlock: IconDefinition = faUnlock;
  faCogs: IconDefinition = faCogs;
  faStethoscope: IconDefinition = faStethoscope;
  faChartLine: IconDefinition = faChartLine;
  faRocket: IconDefinition = faRocket;

  public currentYear: number;
  public isFriday: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.currentYear = new Date().getFullYear();

    const today = new Date();
    if (today.getDay() == 5) {
      this.isFriday = true;
    }
  }

}
