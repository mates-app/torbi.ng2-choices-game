import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer'
import {Subject} from 'rxjs/Subject';


@Injectable()
export class TimerService{

  public gameTimer:Timer = new Timer(60, true);
  public problemTimer:Timer = new Timer(0, false);
  public extraTimer:Timer = new Timer(0, true);


  constructor(){
    this.extraTimer.timeObservable.subscribe(value => {
      if(value <= 0){
        console.log('start gameTimer')
        this.extraTimer.stop();
        this.gameTimer.start();
      }
    });

    this.gameTimer.timeObservable.subscribe(value =>{
      if(this.extraTimer.isActive()){
        console.log('start extraTimer')
        this.gameTimer.stop();
      }
    });

  }


  setProblemTimerConfig(extraTime:number, withTime:boolean){
    this.extraTimer.restart();
    if(withTime && extraTime > 0){
      this.extraTimer.plusTime(extraTime);
      this.extraTimer.start();
    }else{
      this.problemTimer.stop();
    }
    this.problemTimer.restart();
  }

}


export class Timer{
  private interval;
  private _time;
  private _isActive:boolean;

  public timeObservable:Subject<number> = new Subject<number>();
  public plusTimeSubject:Subject<number> = new Subject<number>();

  constructor(
    public initialValue:number,
    public countdown:boolean
  ){
    this.restart();
  }

  get time(){return this._time;}

  public start(){
    if(!this._isActive){
      this._isActive = true;
      this.interval = setInterval(() => {
        this.timeObservable.next(this.countdown ? this._time-- : this._time++);
      }, 1000);
    }
  }

  public restart(){
    this._time = this.initialValue;
  }

  public stop(){
    if(this._isActive){
      this._isActive = false;
      clearInterval(this.interval);
    }
  }

  public isActive():boolean{
    return this._isActive;
  }

  public plusTime(plus:number){
    this.plusTimeSubject.next(plus)
    this.timeObservable.next(this._time += plus);
  }

}
