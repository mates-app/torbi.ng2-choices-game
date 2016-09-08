import {Component, ApplicationRef, OnInit} from '@angular/core';
import * as models from '../models';
import {ToolbarConfig} from "../commons/toolbar/toolbar.component";
import {GameStatusService} from "../services/game-status.service";
import {GameControl} from "../services/game-control";


@Component({
  moduleId: module.id,
  selector: 'game-view',
  templateUrl: 'game-view.component.html',
  styleUrls: ['game-view.component.css']

})
export class GameViewComponent implements OnInit{
  title = 'game-mates';
  gameInstance:models.GameInstance;
  viewStatus:ViewStatus = ViewStatus.NOT_STARTED_GAME;
  gameDisplay:string = "block";
  gameOverType:models.GameOverType
  toolbarConfig:ToolbarConfig



  constructor(
    private gameStatus:GameStatusService,
    private gameControl:GameControl,
    private appRef:ApplicationRef
  ){


  };

  ngOnInit(){
    this.toolbarConfig = new ToolbarConfig()
    // this.gameInstance = this.gameControl.getGameInstance()

    this.gameControl
        .onGameInstanceChange()
        .subscribe(gameInstance => {
          console.log('game-view onGameInstanceChange', gameInstance.gameId)
          this.gameInstance = gameInstance
        })

    this.gameControl
        .onStart()
        .subscribe( isStarted => {
          console.log('game-view onStart', isStarted)
          this.loadingLevel();
        })

    this.gameStatus.subjectLevel.subscribe(level => {
      this.loadingLevel();
    });

    this.gameStatus.subjectGameOver.subscribe(gameOverType => this.gameOver(gameOverType))
    // this.startGame();
  }


  // loadGame(){
  //   this.gameStatus.subjectLevel.subscribe(level => {
  //     this.loadingLevel();
  //   });
  //
  //   this.startGame();
  // }

  // startGame(){
    // this.gameStatus.startGame(this.gameInstance.levels);
    // this.loadingLevel();
  // }


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
    this.gameOverType = gameOver;
    this.viewStatus = ViewStatus.GAME_OVER
    this.gameDisplay = "none";
    this.appRef.tick()
  }

}


export enum ViewStatus{
  NOT_SELECTED_GAME, NOT_STARTED_GAME, LOADING_LEVEL, PLAY_LEVEL, GAME_OVER
}
