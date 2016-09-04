import { Observable } from "rxjs/Observable";
export declare class CounterComponent {
    config: CounterConfig;
}
export declare class CounterConfig {
    value: number;
    velocity: number;
    private valueObservable;
    constructor(value?: number, velocity?: number, valueObservable?: Observable<number>);
    setObservableValue(observable: Observable<number>): void;
}
