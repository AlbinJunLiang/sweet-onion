import { AfterViewInit, Directive, ElementRef, inject, OnDestroy, output } from '@angular/core';

@Directive({
    selector: '[appInfiniteScroll]',
    standalone: true
})
export class InfiniteScrollDirective implements AfterViewInit, OnDestroy {
    private el = inject(ElementRef); // Inyección funcional moderna
    private observer?: IntersectionObserver;

    readonly scrolledToEnd = output<void>();

    ngAfterViewInit() {
        this.observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                this.scrolledToEnd.emit();
            }
        }, {
            rootMargin: '150px',
            threshold: 0.1
        });

        this.observer.observe(this.el.nativeElement);
    }

    ngOnDestroy() {
        this.observer?.disconnect();
    }
}