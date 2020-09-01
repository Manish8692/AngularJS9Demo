import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { TestAppComponent } from './TestApp/testApp.component';
import { ImagePlayerComponent } from './image-player/image-player.component'
import { HttpClientModule } from '@angular/common/http';
import { ResumeComponent } from './resume/resume.component'
import { ReactiveFormsModule } from '@angular/forms'; 
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    AppComponent,
    VideoPlayerComponent,
    TestAppComponent,
    ImagePlayerComponent,
    ResumeComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
