import { Component } from '@angular/core';
import { VideoItemModel } from './video-item.model';
import { VideosSerice } from './videos.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent {
  videos: VideoItemModel [] = [];

  constructor(private videoService:VideosSerice) {

  }

  ngOnInit(): void {
    this.videoService.getVideos().subscribe((data: VideoItemModel[]) => {
      for(var video of data) {
        this.videos.push(video);
      }
    })
  }
}
