import { Component, OnInit } from '@angular/core'
import { Concert } from "./playlist.model"
import { ConcertsService } from './concerts.service';

@Component({
  selector: 'app-concerts',
  templateUrl: './concerts.component.html',
  styleUrls: ['./concerts.component.css']
})

export class ConcertsComponent implements OnInit {
  concert:Concert[] = [];

  constructor(private concertService:ConcertsService) {

  }

  ngOnInit(): void {
    this.concertService.getConcerts().subscribe((data: Concert[]) => {
      for(var concert of data) {
        this.concert.push(concert);
      }
    })
  }
}


