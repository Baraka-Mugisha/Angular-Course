import { SummaryPipe } from './summary.pipe';
import { CoursesService } from './courses.service';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseComponent } from './new-course/new-course.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

@NgModule({
  declarations: [AppComponent, CourseComponent, CoursesComponent, SummaryPipe, FavoriteComponent, MovieSearchComponent, PrepositionPipe, PanelComponent, LikeComponent, InputFormatDirective, ZippyComponent, ContactFormComponent, CreateCourseComponent, SignupFormComponent, NewCourseComponent, ChangePasswordComponent],
  imports: [BrowserModule, FormsModule, BrowserAnimationsModule, MatToolbarModule, FlexLayoutModule, ReactiveFormsModule],
  providers: [CoursesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
