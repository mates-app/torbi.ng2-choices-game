/**
 * Created by josecullen on 10/09/16.
 */


import {Component, OnInit, Input} from "@angular/core";
import {GameStatusService} from "../../services/game-status.service";
import {Observable, Observer} from "rxjs/Rx";
import {GameControl} from "../../services/game-control";


@Component({
    selector: 'effectivity-circle',
    template: `
      <button class="progress-button" md-mini-fab color="accent">
        <p><strong>{{effectivity}}</strong></p>
        <md-progress-circle  class="inner-button-progress" mode="determinate" [value]="effectivity" ></md-progress-circle> 
      </button>

`,

    styles: [`
        md-progress-circle.inner-button-progress{
          position: inherit;
          z-index: 10;
          transform: translateY(-70%) translateX(-28%);
        }
        
        button.progress-button{
          margin: 45px
        }
        button.progress-button p{
          margin: 2px
        }
      `
    ]
})
export class EffectivityCircle implements OnInit{
    @Input() wholeGame:boolean = false
    @Input() isGameOver:boolean = false
    effectivity:number = 0


    constructor(
        private gameStatus:GameStatusService,
        private gameControl:GameControl
    ){
    }

    ngOnInit():void {
        console.log('this.wholeGame',this.wholeGame)
        this.replay()
    }

    replay(){
        this.runEffectivity().subscribe(
            value => {
                this.effectivity = value
            }
        )
    }

    private runEffectivity():Observable<number>{
        return Observable.create((observer:Observer<number>) => {
            let count = 0
            let effectivity = this.calculateEffectivity(this.wholeGame)

            let interval = setInterval(() => {

                if(count >= effectivity){
                    observer.next(parseInt(''+effectivity, 10))
                    observer.complete()
                    return clearInterval(interval);
                }else{
                    observer.next(count++)
                }

            }, 50)

        })

    }

    private calculateEffectivity(wholeGame:boolean):number{
        console.log('wholeGame',wholeGame, this.gameControl.getGameInstance().levels.length , this.gameStatus.level +1)
        let levelCount:number = wholeGame ? this.gameControl.getGameInstance().levels.length : this.gameStatus.level
        let effectivity = 0
        let bestEffectivity = 0

        if(this.isGameOver && !wholeGame){
            levelCount++
        }

        if(this.gameStatus.score != 0){

            for(let i = 0; i < levelCount; i++){
                let level = this.gameControl.getGameInstance().levels[i]
                let bestScorePerProblem = level.scoreConfig.baseScore + level.scoreConfig.extras[0].extraScore
                bestEffectivity += bestScorePerProblem * level.gameProblems.length
            }
            console.log('score', this.gameStatus.score, 'bestEffectivity', bestEffectivity, 'effectivity', effectivity)
            effectivity = this.gameStatus.score * 100 / bestEffectivity
        }

        console.log('effectivity',effectivity)
        return effectivity
    }






}