import { EventEmitter } from '@angular/core';
export declare class AnswerButtonsComponent {
    answers: Array<string>;
    isMath: boolean;
    answer: EventEmitter<string>;
    constructor();
    sendAnswer(answer: string): void;
}
