import {
  Directive,
  ElementRef,
  Input,
  Renderer2,
  OnInit,
  OnDestroy,
} from '@angular/core';

@Directive({
  selector: '[appScrollTrigger]',
  standalone: true,
})
export class ScrollTriggerDirective implements OnInit, OnDestroy {
  @Input('appScrollTrigger') animationClass: string = '';
  private observer!: IntersectionObserver;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnInit() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            this.renderer.addClass(
              this.el.nativeElement,
              this.animationClass.trim(),
            );
          else
            this.renderer.removeClass(
              this.el.nativeElement,
              this.animationClass.trim(),
            );
        });
      },
      { threshold: 0.1 },
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    if (this.observer) this.observer.disconnect();
  }
}
