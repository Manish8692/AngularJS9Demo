export class VideoCollection {

  videoId: number;
  videoPath: string;
  videoName: string;
  videoLengthInMinute: number;
  videoSize: number;

  constructor() {
    this.videoId = 0;
    this.videoLengthInMinute = 0;
    this.videoName = '';
    this.videoPath = '';
    this.videoSize = 0;
  }

}
