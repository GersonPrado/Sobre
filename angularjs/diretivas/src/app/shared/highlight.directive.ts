import { Directive,ElementRef,Renderer,HostListener,HostBinding, Input } from '@angular/core';
import { preserveWhitespacesDefault } from '@angular/compiler';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @HostBinding('style.backgroundColor')backgroundColor: string;

  @HostListener('mouseenter') onMouseover() { this.backgroundColor = this.highlightColor; }

  @HostListener('mouseleave') onMouseLeave() { this.backgroundColor = this.defaultColor; }

  @Input() defaultColor: string = 'white';
  @Input('highlight') highlightColor: string = 'yellow';

  constructor( 
    private _elementRef: ElementRef,
    private _renderer: Renderer) { }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;    
  }  
}
