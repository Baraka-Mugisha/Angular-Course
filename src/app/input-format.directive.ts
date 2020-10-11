import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input('format') format;

  constructor(private el: ElementRef) {}
@HostListener('focus') onFocus(){
  console.log('on focus...');
}

@HostListener('blur') onBlur(){
  console.log('on blur...');
  let value: string = this.el.nativeElement.value;

    if(this.format == 'uppercase'){
    this.el.nativeElement.value = value.toUpperCase();
    }
    else{
      this.el.nativeElement.value = value.toLowerCase();
    }
}

}
