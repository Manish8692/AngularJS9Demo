import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestAppComponent } from './TestApp/testApp.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { ImagePlayerComponent } from './image-player/image-player.component';
import { ResumeComponent } from './resume/resume.component';
import { VideoDetailServiceService } from './Services/video-detail-service.service';


const routes: Routes = [
  { path: "home", component : TestAppComponent },
  { path: "video", component: VideoPlayerComponent },
  { path: "image", component: ImagePlayerComponent },
  { path: "Resume", component: ResumeComponent },
  { path: "", redirectTo: "home", pathMatch : "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [VideoDetailServiceService]
})
export class AppRoutingModule { }
