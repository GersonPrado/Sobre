import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: 'p[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(
        private _elementRef: ElementRef,
        private _redender: Renderer) { 
        this._redender.setElementStyle(this._elementRef.nativeElement,'backgroundColor','yellow'
      );
  }

}
