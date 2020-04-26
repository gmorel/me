import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-hard-skill',
  templateUrl: './hard-skill.component.html',
  styleUrls: ['./hard-skill.component.scss']
})
export class HardSkillComponent implements OnInit {

  @Input() title: string;
  @Input() description: string;
  @Input() percentage: number;

  constructor() { }

  ngOnInit(): void {
  }

  percentageStyle() : string {
    return this.percentage + '%';
  }
}
