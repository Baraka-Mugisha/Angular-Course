import { SummaryPipe } from './summary.pipe';
import { CoursesService } from './courses.service';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgModule, EventEmitter } from '@angular/core';

import { AppComponent } from './app.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { PrepositionPipe } from './preposition.pipe';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';

import 'hammerjs';

@NgModule({
  declarations: [AppComponent, CourseComponent, CoursesComponent, SummaryPipe, FavoriteComponent, MovieSearchComponent, PrepositionPipe, PanelComponent, LikeComponent],
  imports: [BrowserModule, FormsModule, BrowserAnimationsModule, MatToolbarModule, FlexLayoutModule],
  providers: [CoursesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
