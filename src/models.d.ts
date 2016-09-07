/**
 * Created by josecullen on 30/08/16.
 */
export declare class GameInstance {
    instanceId: string;
    gameId: string;
    levels: Array<GameLevel>;
    constructor(instanceId?: string, gameId?: string, levels?: Array<GameLevel>);
}
export declare class GameLevel {
    gameProblems: Array<GameProblem>;
    scoreConfig: ScoreConfig;
    constructor(gameProblems?: Array<GameProblem>, scoreConfig?: ScoreConfig);
}
export declare class GameProblem {
    problemExpression: string;
    solvedExpression: string;
    answerOptions: string[];
    answer: string[];
    constructor(problemExpression?: string, solvedExpression?: string, answerOptions?: string[], answer?: string[]);
}
export declare class ScoreConfig {
    baseScore: number;
    preCount: number;
    withTime: boolean;
    extras: Array<ExtraScore>;
    constructor(baseScore?: number, preCount?: number, withTime?: boolean, extras?: Array<ExtraScore>);
}
export declare class ExtraScore {
    name: string;
    extraTime: number;
    extraScore: number;
    thresholdTime: number;
    constructor(name?: string, extraTime?: number, extraScore?: number, thresholdTime?: number);
}
export declare class Score {
    base: number;
    extra: number;
    constructor(base?: number, extra?: number);
    allScore(): number;
}
export declare enum GameOverType {
    TIME = 0,
    LEVELS = 1,
    LIVES = 2,
}
