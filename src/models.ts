/**
 * Created by josecullen on 30/08/16.
 */

export class GameInstance{
    constructor(
        public instanceId:string = "",
        public gameId:string = "",
        public levels:Array<GameLevel> = [new GameLevel()]
    ){}
}

export class GameLevel{
    constructor(
        public gameProblems:Array<GameProblem> = [new GameProblem()],
        public scoreConfig:ScoreConfig = new ScoreConfig()
    ){}
}

export class GameProblem{
    constructor(
        public problemExpression:string = '' ,
        public solvedExpression:string = '',
        public answerOptions:string[] = [''],
        public answer:string[] = ['']
    ){}
}

export class ScoreConfig{
    constructor(
        public baseScore:number = 0,
        public preCount:number = 0,
        public withTime:boolean = true,
        public extras:Array<ExtraScore> = [new ExtraScore()]
    ){}
}

export class ExtraScore{
    constructor(
        public name:string = "",
        public extraTime:number = 0,
        public extraScore:number = 0,
        public thresholdTime:number = 100
    ){}
}

export class Score{
    constructor(
        public base:number = 0,
        public extra:number = 0
    ){}

    allScore():number{
        return this.base + this.extra
    }
}

export enum GameOverType{
    TIME, LEVELS, LIVES
}

