import { GameProblem, GameLevel } from './models';
import { ToolbarConfig } from "./commons/toolbar/toolbar.component";
import { GameControl } from "./services/game-control";
export declare class ChoiceGameTest {
    private gameControl;
    answers: Array<string>;
    expression: string;
    gameProblem: GameProblem;
    gameLevel: GameLevel;
    toolbarConfig: ToolbarConfig;
    logs: string;
    constructor(gameControl: GameControl);
    setGame(): void;
    start(): void;
}
