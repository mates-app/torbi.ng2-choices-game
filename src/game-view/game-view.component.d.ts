import { ApplicationRef, OnInit } from '@angular/core';
import * as models from '../models';
import { ToolbarConfig } from "../commons/toolbar/toolbar.component";
import { GameStatusService } from "../services/game-status.service";
import { GameControl } from "../services/game-control";
import { MdIconRegistry } from '@angular/material';
export declare class GameViewComponent implements OnInit {
    private gameStatus;
    private gameControl;
    private appRef;
    private mdIconRegistry;
    title: string;
    gameInstance: models.GameInstance;
    viewStatus: ViewStatus;
    gameDisplay: string;
    gameOverType: models.GameOverType;
    toolbarConfig: ToolbarConfig;
    constructor(gameStatus: GameStatusService, gameControl: GameControl, appRef: ApplicationRef, mdIconRegistry: MdIconRegistry);
    ngOnInit(): void;
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
