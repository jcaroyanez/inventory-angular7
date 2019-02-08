import { Component, OnInit } from '@angular/core';
import { StatsService } from 'src/app/services/stats.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  countCategory:number = 0;

  constructor(
    private statsService:StatsService
  ) { }

  ngOnInit() {
    this.statsService.getCountRegister().subscribe((response:any) => {
      console.log(response)
      this.countCategory = response.category;
    })
  }

}
