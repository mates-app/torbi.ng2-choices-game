import { ElementRef } from '@angular/core';
export declare class MathJaxDirective {
    private el;
    texExpression: string;
    constructor(el: ElementRef);
    ngOnChanges(): void;
}
