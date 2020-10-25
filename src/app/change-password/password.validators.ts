import { AbstractControl, ValidationErrors } from '@angular/forms';

export class passwordValidators {
    static invalid(control: AbstractControl) : Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value !== '1234')
                    resolve({ invalid: true })
                else
                    resolve(null)
            }, 2000)
        })
    }

    static passwordsNotMatch(control: AbstractControl){
        let newPassword = control.get('newPassword');
        let confirmPassword = control.get('confirmPassword');

        if(newPassword.value !== confirmPassword.value)
            return { passwordsNotMatch: true }
        return null
    }
}