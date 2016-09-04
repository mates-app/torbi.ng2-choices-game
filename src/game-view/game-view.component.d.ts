import { ApplicationRef, OnInit } from '@angular/core';
import * as models from '../models';
import { ToolbarConfig } from "../commons/toolbar/toolbar.component";
import { GameStatusService } from "../services/game-status.service";
import { CurrentGameInstance } from "../services/current-game.service";
export declare class GameViewComponent implements OnInit {
    private gameStatus;
    private currentGameInstance;
    private appRef;
    title: string;
    gameInstance: models.GameInstance;
    viewStatus: ViewStatus;
    gameDisplay: string;
    gameOverType: models.GameOverType;
    toolbarConfig: ToolbarConfig;
    ngOnInit(): void;
    constructor(gameStatus: GameStatusService, currentGameInstance: CurrentGameInstance, appRef: ApplicationRef);
    loadGame(): void;
    startGame(): void;
    /***************/
    loadingLevel(): void;
    playLevel(): void;
    gameOver(gameOver: models.GameOverType): void;
}
export declare enum ViewStatus {
    NOT_SELECTED_GAME = 0,
    NOT_STARTED_GAME = 1,
    LOADING_LEVEL = 2,
    PLAY_LEVEL = 3,
    GAME_OVER = 4,
}
