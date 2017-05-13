import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { NewHikeComponent } from './new-hike/new-hike.component';
import { HikeListComponent } from './hike-list/hike-list.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NewHikeComponent,
    HikeListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
