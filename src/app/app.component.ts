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
  myCourses;
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

  loadCourses(){
    this.myCourses = [{
      id: 1, name: 'course1'
    },{
      id: 2, name: 'course2'
    },{
      id: 3, name: 'course3'
    }]
  }
  trackCourse(index, course){
    return course ? course.id : undefined
  }

  task = {
    title: 'review applications',
    assignee: {
      name: 'null'
    }
  }
}
