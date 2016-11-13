import { Component, Input} from '@angular/core';
import { Observable } from "rxjs/Observable";

@Component({
  moduleId : module.id,
  selector: 'counter',
  template: `
    <div [ngClass]="{animate : shouldAnimate, animateOnce : !shouldAnimate}">
      <span id="valueNumber" class="valueNumber" >{{config.value}}</span>
    </div>`,
  styleUrls: ['counter.component.css']

})
export class CounterComponent{
  @Input() config:CounterConfig = new CounterConfig();
}


export class CounterConfig{
  constructor(
    public value:number = 0,
    public velocity:number = 200,
    private valueObservable:Observable<number> = new Observable<number>()){
  }

  public setObservableValue(observable:Observable<number>){
    observable.subscribe(valueObserve => {this.value = valueObserve;});
  }

}
