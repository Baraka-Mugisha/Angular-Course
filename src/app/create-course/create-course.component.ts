import { Component } from '@angular/core';

@Component({
  selector: 'create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent {

  constructor() { }
  categories = [{id: 1, name: "Development"}, {id: 2, name: "Art"}, {id: 3, name: "Languages"}]
  submit(form){
    console.log(form)
  }

}
