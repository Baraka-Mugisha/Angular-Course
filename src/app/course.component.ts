import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
  selector: 'course',
  template: `
    <h1>{{ courses.length }} Authors</h1>
    <ul>
      <li *ngFor="let mycourse of courses" [textContent]="mycourse"></li>
    </ul>
    <button
      class="btn btn-primary"
      [class.active]="isActive"
      [style.color]="isActive ? 'blue' : 'white'"
      (click)="onSave($event)"
    >
      Click Me
    </button>
    <input #my_email (keyup.enter)="onSave(my_email.value)" />
    <input
      [value]="email"
      (keyup.enter)="email = $event.target.value; onWrite()"
    />
    <input [(ngModel)]="password" (keyup.enter)="onPass()" />

    <h3>{{ title | uppercase }}</h3>
    <h3>{{ students | number }}</h3>
    <h3>{{ price | currency: 'AUD':true:'1.2-2' }}</h3>
    <h3>{{ rating | number: '1.1-2' }}</h3>
    <h3>{{ releaseDate | date: 'fullDate' }}</h3>
    <p>{{ Lorem | summary: 50 }}</p>
  `,
})
export class CourseComponent {
  title = 'Authors';
  students = 12323;
  price = 489.434565;
  rating = 1.243;
  releaseDate = new Date();
  Lorem =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishin";
  courses;
  email = 'my@gugo.com';
  password = '1234';
  isActive = false;
  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
  onSave($event) {
    console.log('saveddd!!', $event);
  }
  onWrite() {
    console.log(this.email);
  }
  onPass() {
    console.log(this.password);
  }
  getTitle() {
    return this.title;
  }
}
