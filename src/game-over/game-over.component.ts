/**
 * Created by josecullen on 10/09/16.
 */
import {Component, Input, Directive, OnInit} from '@angular/core';
import {GameOverType} from "../models";

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

