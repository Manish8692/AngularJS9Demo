import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { VideoCollection } from '../Model/video-collection'

@Injectable({
  providedIn: 'root'
})
export class VideoDetailServiceService {

  constructor(private httpService: HttpClient) {}

  getVideoList(): Observable<VideoCollection[]>
  {
    var videoList = this.httpService.get<any[]>(this.getVideoBasePath() + "/VideoCollection.json");
    return videoList;
  }

  getVideoBasePath(): string {
    return "http://localhost:8866";
  }
}
