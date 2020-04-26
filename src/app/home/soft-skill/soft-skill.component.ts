import {Component, Input, OnInit} from '@angular/core';
import {IconDefinition} from "@fortawesome/fontawesome-common-types";

@Component({
  selector: 'app-soft-skill',
  templateUrl: './soft-skill.component.html',
  styleUrls: ['./soft-skill.component.scss']
})
export class SoftSkillComponent implements OnInit {

  @Input() icon: IconDefinition;
  @Input() title: string;
  @Input() description: string;

  constructor() { }

  ngOnInit(): void {
  }

}
