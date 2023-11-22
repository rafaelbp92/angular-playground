import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[maximize]',
})
export class MaximixeDirective implements AfterViewInit {
  @Input() color: string = 'yellow';
  constructor(private elementRef: ElementRef) {}
  ngAfterViewInit(): void {
    this.elementRef.nativeElement.style.height = '500px';
    this.elementRef.nativeElement.style.background = this.color;
  }
}
