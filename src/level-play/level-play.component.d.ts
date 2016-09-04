import { EventEmitter } from '@angular/core';
import { GameProblem, GameLevel } from "../models";
import { ToolbarConfig } from "../commons/toolbar/toolbar.component";
import { GameStatusService } from "../services/game-status.service";
export declare class PlayingLevelComponent {
    private gameStatus;
    gameProblem: GameProblem;
    gameLevel: GameLevel;
    toolbarConfig: ToolbarConfig;
    isCorrect: EventEmitter<boolean>;
    constructor(gameStatus: GameStatusService);
    printProblem(): string;
    processAnswer(answer: string): void;
    displayProblem(problemIndex: number): string;
}
