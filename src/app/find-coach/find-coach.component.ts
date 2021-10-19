import { Component, OnInit } from '@angular/core';
import { Coach } from '../shared/coach';
import { CoachesService } from '../services/coaches.service';
import { flyInOut } from '../animations/app.animations';

@Component({
  selector: 'app-find-coach',
  templateUrl: './find-coach.component.html',
  styleUrls: ['./find-coach.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display:block;'
  },
  animations: [
    flyInOut()
  ]
})
export class FindCoachComponent implements OnInit {

  coaches!: Coach[];
  searchByName!: string;
  searchByTopic!: string;
  searchByIndustry!: string;

  constructor(private coachesService: CoachesService) { 
    this.coachesService.getCoaches()
      .subscribe(coaches => this.coaches = coaches);
  }

  ngOnInit(): void {
  }


}
