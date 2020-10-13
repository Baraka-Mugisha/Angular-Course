import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'hello-world';
  post = {
    title: 'Title',
    isFavorite: false,
  };
  courses = []; // for ngIf
  myCourses = [{
    id: 1, name: 'course1'
  },{
    id: 2, name: 'course2'
  },{
    id: 3, name: 'course3'
  }]
  viewMode = 'map'; //for ngSwitchCase

  tweet = {
    body: 'This is the body',
    isLiked: true,
    likesCount: 10,
  };
  onFavoriteChanged(eventArgs) {
    console.log('favorite changed: ', eventArgs);
  }

  onAdd(){
    this.myCourses.push({ id: 4, name: 'course4' })
  }
}
