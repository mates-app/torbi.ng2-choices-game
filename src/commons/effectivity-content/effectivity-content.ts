/**
 * Created by josecullen on 11/09/16.
 */
import {Component, Input, OnInit, ViewChild} from "@angular/core";
import {EffectivityCircle} from "../effectivity-circle/effectivity-circle.component";
import {GameControl} from "../../services/game-control";

@Component({
    moduleId : module.id,
    selector: 'effectivity-content',
    styleUrls: ['effectivity-content.css'],
    template:`
        <h2>Progreso del Juego</h2>
        <effectivity-circle #gameProgress [wholeGame]="true"></effectivity-circle>
        <h2>Efectividad</h2>
        <effectivity-circle #effectivity [wholeGame]="false" [isGameOver]="isGameOver"></effectivity-circle>

`
})
export class EffectivityContent implements OnInit{
    @Input() isGameOver:boolean = false
    @ViewChild('gameProgress') gameProgress:EffectivityCircle;
    @ViewChild('effectivity') effectivity:EffectivityCircle;

    constructor(private gameControl:GameControl){

    }

    ngOnInit():void {
        console.log('effectivity content init', this.isGameOver)


    }

    ngAfterViewInit():void {
        
        this.isGameOver 
            ? this.gameControl
                .onGameOver()
                .subscribe(gameOver => {
                    this.gameProgress.replay()
                    this.effectivity.replay()
                })
            : this.gameControl
                .onLevelChange()
                .subscribe(level => {
                    this.gameProgress.replay()
                    this.effectivity.replay()
                })

    }


}