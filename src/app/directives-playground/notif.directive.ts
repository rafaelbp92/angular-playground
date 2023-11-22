import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[notIf]',
})
export class NotIfDirective {
  @Input() set notIf(condition: boolean) {
    if (condition) this.viewContainer.clear();
    else this.viewContainer.createEmbeddedView(this.templateRef);
  }

  constructor(
    private templateRef: TemplateRef<unknown>,
    private viewContainer: ViewContainerRef
  ) {}
}
