import { Subject } from 'rxjs/Subject';
import { TimerService } from './timer.service';
import * as models from '../models';
export declare class GameStatusService {
    private timer;
    private gameLevels;
    subjectScore: Subject<models.Score>;
    subjectLevel: Subject<number>;
    subjectLives: Subject<number>;
    subjectProblem: Subject<number>;
    subjectGameOver: Subject<models.GameOverType>;
    level: number;
    problem: number;
    score: number;
    lives: number;
    constructor(timer: TimerService);
    startGame(gameLevels: Array<models.GameLevel>): void;
    pauseGame(): void;
    resumeGame(): void;
    onAnswer(isCorrect: boolean): void;
    setScoreAndTime(): void;
    nextProblem(): void;
    nextLevel(): void;
    private checkGameOver();
    private getActualProblem();
    private getActualLevel();
    private getActualScoreConfig();
}
