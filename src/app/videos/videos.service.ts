import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { VideoItemModel } from "./video-item.model";

@Injectable(
    {providedIn: 'root'}
)

export class VideosSerice{
    private baseUrl:string = "https://inzo-app-default-rtdb.firebaseio.com/";
    private videosEndPoint:string = "videos.json";

    constructor(private http:HttpClient){

    }

    getVideos(){
        return this.http.get<VideoItemModel []>(this.baseUrl + this.videosEndPoint);

    }

    getVideo(index:number){
        return this.http.get<VideoItemModel>(this.baseUrl + 'videos/' + index + '.json');
    }
}