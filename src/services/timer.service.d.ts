import { Subject } from 'rxjs/Subject';
export declare class TimerService {
    gameTimer: Timer;
    problemTimer: Timer;
    extraTimer: Timer;
    constructor();
    setProblemTimerConfig(extraTime: number, withTime: boolean): void;
}
export declare class Timer {
    initialValue: number;
    countdown: boolean;
    private interval;
    private _time;
    private _isActive;
    timeObservable: Subject<number>;
    plusTimeSubject: Subject<number>;
    constructor(initialValue: number, countdown: boolean);
    time: any;
    start(): void;
    restart(): void;
    stop(): void;
    isActive(): boolean;
    plusTime(plus: number): void;
}
