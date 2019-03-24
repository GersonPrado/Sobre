import { Directive, HostListener,ElementRef,Renderer, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  private backgroundColor: string;
  @HostBinding('style.backgroundColor') get setColor() {
    //Codigo extra antes de setar a propriedade
    return this.backgroundColor;
  }
  //@HostBinding('style.backgroundColor')backgroundColor: string;

  @HostListener('mouseenter') onMouseover() {
    /*this._renderer.setElementStyle(this._elementRef.nativeElement,'background-color','yellow');*/
    this.backgroundColor = 'yellow';    
  }

  @HostListener('mouseleave') onMouseLeave() {
    /*this._renderer.setElementStyle(this._elementRef.nativeElement,'background-color','white');*/
    this.backgroundColor = 'white';    
  }

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer
  ) { }

}
