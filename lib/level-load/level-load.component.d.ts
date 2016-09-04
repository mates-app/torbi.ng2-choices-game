import { EventEmitter } from '@angular/core';
export declare class LoadingLevelComponent {
    startLevelEmitter: EventEmitter<string>;
    count: number;
    countChange: EventEmitter<number>;
    constructor();
    startCountdown(): void;
    startLevel(): void;
}
