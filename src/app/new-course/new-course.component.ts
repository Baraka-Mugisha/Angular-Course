import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})
export class NewCourseComponent {
  form = new FormGroup({
    name: new FormControl(),
    topics: new FormArray([])
  })
  secondForm

  constructor(fb: FormBuilder){ // This is a second approch 
    this.secondForm = fb.group({
      name: ['', Validators.required],
      topics: fb.array([])
    })
  }
  addTopic(topic: HTMLInputElement){
    (this.form.get('topics') as FormArray).push(new FormControl(topic.value))
  }
  removeTopic(topic: FormControl){
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }
  get topics() {
    return this.form.get('topics') as FormArray;
  }
}
