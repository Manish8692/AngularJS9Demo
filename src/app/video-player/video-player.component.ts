import { Component, OnInit } from '@angular/core';
import { VideoDetailServiceService } from '../Services/video-detail-service.service'
import { VideoCollection } from '../Model/video-collection'

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {

  videoList: VideoCollection[] = [];
  selectedVideoName: string;
  videoBasePath: string;

  constructor(private videoDetailService: VideoDetailServiceService) { }

  ngOnInit(): void {
    this.videoBasePath = this.videoDetailService.getVideoBasePath();
    this.videoDetailService.getVideoList().subscribe(
      (response: VideoCollection[]) => {
        this.videoList = response;
        this.playSelectedVideo(0);
      }
    );    
  }


  playSelectedVideo(index) {
    this.selectedVideoName = this.videoBasePath + this.videoList[index].videoPath + "/" + this.videoList[index].videoName;
  }



}
