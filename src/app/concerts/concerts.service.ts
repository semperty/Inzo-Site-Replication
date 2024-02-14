import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Concert } from "./playlist.model";
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable(
    {providedIn: 'root'}
)

export class ConcertsService{
    private baseUrl:string = "https://inzo-app-default-rtdb.firebaseio.com/";
    private videosEndPoint:string = "concerts.json";

    constructor(private db:AngularFireDatabase){

    }

    getConcerts(){
        return this.db.list<Concert>("concerts").valueChanges();

    }

    addConcert(concert:Concert){
        return this.db.list<Concert>("concerts").push(concert);
    }
}