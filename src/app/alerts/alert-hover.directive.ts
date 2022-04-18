import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAlertHover]'
})
export class AlertHoverDirective {
  @Input() defaultHoverColor: string = 'grey';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  private setBackground(color: string | null){
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }

  @HostListener('mouseenter') mouseover(event: Event): void{
    this.setBackground(this.defaultHoverColor);
  }

  @HostListener('mouseleave') mouseleave(event: Event): void{
    this.setBackground(null);
  }

}
