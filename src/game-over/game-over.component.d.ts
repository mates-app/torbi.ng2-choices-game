import { GameOverType } from "../models";
import { GameControl } from "../services/game-control";
export declare class GameOverComponent {
    private gameControl;
    gameOverType: GameOverType;
    effectivity: number;
    constructor(gameControl: GameControl);
    runEffectivity(): void;
}
export declare class GameOverBody {
}
