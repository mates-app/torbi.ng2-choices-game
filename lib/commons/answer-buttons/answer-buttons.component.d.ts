import { EventEmitter } from '@angular/core';
export declare class AnswerButtonsComponent {
    answers: Array<string>;
    answer: EventEmitter<string>;
    constructor();
    sendAnswer(answer: string): void;
}
