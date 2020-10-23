import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { passwordValidators } from './password.validators';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  form = new FormGroup({
    oldPassword: new FormControl('',
      Validators.required,
      passwordValidators.invalid
      ),
    newPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(5)]),
    confirmPassword: new FormControl('', Validators.required)
  }, passwordValidators.passwordsNotMatch )

  // THE SECOND WAY :

  // form
  // constructor(fb: FormBuilder) {
  //   this.form = fb.group({
  //     oldPassword: fb.control('',
  //       Validators.required,
  //       passwordValidators.invalid),
  //     newPassword: fb.control('', [
  //       Validators.required,
  //       Validators.minLength(5)]),
  //     confirmPassword: fb.control('', Validators.required),
  //   }, { validator: passwordValidators.passwordsNotMatch })
  // }

  changePassword(){
    console.log('form submitted...', this.form)
  }
  get oldPassword(){
    return this.form.get('oldPassword')
  }
  get newPassword(){
    return this.form.get('newPassword')
  }
  get confirmPassword(){
    return this.form.get('confirmPassword')
  }
}
