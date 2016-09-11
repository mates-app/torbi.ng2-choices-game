import { EventEmitter } from '@angular/core';
export declare class LoadingLevelComponent {
    startLevelEmitter: EventEmitter<string>;
    count: number;
    level: number;
    countChange: EventEmitter<number>;
    constructor();
    startCountdown(): void;
    startLevel(): void;
}
export declare class LevelLoadBody {
}
export declare class FirstLevelBody {
}
