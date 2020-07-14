import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {GalleryComponent} from "./gallery/gallery.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'more', component: GalleryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
