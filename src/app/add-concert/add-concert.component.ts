import { Component, OnInit } from '@angular/core';
import { Concert } from '../concerts/playlist.model';
import { ConcertsService } from '../concerts/concerts.service';

@Component({
  selector: 'fm-add-concert',
  templateUrl: './add-concert.component.html',
  styleUrls: ['./add-concert.component.css']
})
export class AddConcertComponent implements OnInit {
  
  constructor(private ps:ConcertsService) {

  }

  ngOnInit(): void {

  }

  addConcert(concert:Concert) {
    this.ps.addConcert(concert);
  }
}
