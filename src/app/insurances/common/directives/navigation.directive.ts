import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[navigation-host]'
})
export class NavigationDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}