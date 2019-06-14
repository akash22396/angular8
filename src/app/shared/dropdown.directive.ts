// tslint:disable-next-line:import-spacing
import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
     selector: '[appDropdown]'
    })
export class DropdownDirective {

@HostBinding('class.show') isOpen = false;
    constructor() { }
// tslint:disable-next-line:align
@HostListener('click') toggleOpen() {
     this.isOpen = !this.isOpen;
}
}
