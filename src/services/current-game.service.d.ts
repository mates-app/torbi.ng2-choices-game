import { GameInstance } from '../models';
export declare class CurrentGameInstance {
    private gameInstance;
    constructor();
    getGameInstance(): GameInstance;
    setCurrentInstance(gameInstance: GameInstance): void;
}
