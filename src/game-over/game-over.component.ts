/**
 * Created by josecullen on 10/09/16.
 */
import {Component, Input, Directive, OnInit} from '@angular/core';
import {GameOverType} from "../models";
import {GameControl} from "../services/game-control";

@Component({
    moduleId: module.id,
    selector: 'game-over',
    template: `
<div class="flex-container">


  <header>
    <h1>Game Over</h1>    
  </header>

  <br>

  <section class="content">
    <div class="sub-content">
      <h2>Progreso del Juego</h2>
      <effectivity-circle [wholeGame]="true" [isGameOver]="true"></effectivity-circle>
      <h2>Efectividad</h2>
      <effectivity-circle [wholeGame]="false" [isGameOver]="true"></effectivity-circle>

      <ng-content select="game-over-body"></ng-content>
    </div>
  </section>

  <br>

  <footer>
  </footer>
  </div>  


  `,
    styleUrls: ['game-over.component.css']

})
export class GameOverComponent{

    @Input() gameOverType:GameOverType



}


@Directive({
    selector: 'game-over-body'
})
export class GameOverBody{}

