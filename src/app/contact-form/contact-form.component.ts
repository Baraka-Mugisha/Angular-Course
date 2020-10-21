import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor() { }
  log(model){
    console.log(model)
  }
  contactMethods = [{id: 1, name: 'email'}, {id: 2, name: 'phone'}]
  submit(f){
    console.log(f)
  }
  ngOnInit(): void {
  }

}
