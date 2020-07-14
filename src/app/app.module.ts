import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { SoftSkillComponent } from './home/soft-skill/soft-skill.component';
import { HardSkillComponent } from './home/hard-skill/hard-skill.component';
import {Angular2ImageGalleryModule} from "angular2-image-gallery";
import {GalleryComponent} from "./gallery/gallery.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SoftSkillComponent,
    HardSkillComponent,
    GalleryComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    Angular2ImageGalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
