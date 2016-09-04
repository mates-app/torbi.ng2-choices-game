import {Component, ApplicationRef, OnInit} from '@angular/core';
import * as models from '../models';
import {ToolbarConfig} from "../commons/toolbar/toolbar.component";
import {GameStatusService} from "../services/game-status.service";
import {CurrentGameInstance} from "../services/current-game.service";

@Component({
  moduleId: module.id,
  selector: 'game-view',
  templateUrl: 'game-view.component.html',
  styleUrls: ['game-view.component.css']

})
export class GameViewComponent implements OnInit{
  title = 'game-mates';
  gameInstance:models.GameInstance;
  viewStatus:ViewStatus = ViewStatus.LOADING_LEVEL;
  gameDisplay:string = "block";
  gameOverType:models.GameOverType
  toolbarConfig:ToolbarConfig

  ngOnInit(){
    console.log('game-view component')

    this.toolbarConfig = new ToolbarConfig()

    this.gameInstance = this.currentGameInstance.getGameInstance()
    this.gameStatus.subjectLevel.subscribe(level => {
      console.log("new level", level);
      this.loadingLevel();
    } );

    this.gameStatus.subjectGameOver.subscribe(gameOverType => this.gameOver(gameOverType))


    this.startGame();
  }

  constructor(
    private gameStatus:GameStatusService,
    private currentGameInstance:CurrentGameInstance,
    private appRef:ApplicationRef
    ){  };


  loadGame(){
    this.gameStatus.subjectLevel.subscribe(level => {
      console.log("new level", level);
      this.loadingLevel();
    } );

    this.startGame();
  }

  startGame(){
    // this.gameInstance = this.matesServices.getGameInstance();
    this.gameStatus.startGame(this.gameInstance.levels);

    this.loadingLevel();

    console.log(this.gameInstance);
  }


  /***************/

  loadingLevel(){
    this.viewStatus = ViewStatus.LOADING_LEVEL;
    this.gameStatus.pauseGame();
    this.gameDisplay = "none";
  }

  playLevel(){
    this.viewStatus = ViewStatus.PLAY_LEVEL;
    this.gameStatus.resumeGame();
    this.gameDisplay = "block";
  }

  gameOver(gameOver:models.GameOverType){
    console.log(gameOver)
    this.gameOverType = gameOver;
    console.log('ViewStatus',this.viewStatus)
    this.viewStatus = ViewStatus.GAME_OVER
    console.log('ViewStatus',this.viewStatus)
    this.gameDisplay = "none";
    this.appRef.tick()
  }

}


export enum ViewStatus{
  NOT_SELECTED_GAME, NOT_STARTED_GAME, LOADING_LEVEL, PLAY_LEVEL, GAME_OVER
}
