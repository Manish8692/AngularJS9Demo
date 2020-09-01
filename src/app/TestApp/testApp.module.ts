import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TestAppRoutingModule } from './testApp-routing.module';
import { TestAppComponent } from './testApp.component';

@NgModule({
  declarations: [
    TestAppComponent
  ],
  imports: [
    BrowserModule,
    TestAppRoutingModule
  ],
  providers: [],
  bootstrap: [TestAppComponent]
})
export class TestAppModule { }
