import {Injectable} from '@angular/core';
import {GameStatusService} from "./game-status.service";
import {GameInstance, Score, GameOverType} from "../models";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs/Observer";

@Injectable()
export class GameControl{
    private gameInstance:GameInstance = new GameInstance();
    private _onStart:Subject<boolean> = new Subject<boolean>()
    private _onGameInstanceChange:Subject<GameInstance> = new Subject<GameInstance>()


    constructor(private gameStatusService:GameStatusService){}

    public start(){
        this.gameStatusService.startGame(this.gameInstance.levels)
        this._onStart.next(true)
    }

    public pause(){
        this.gameStatusService.pauseGame()
    }

    public resume(){
        this.gameStatusService.resumeGame()
    }

    public setGameInstance(gameInstance:GameInstance){
        this.gameInstance = gameInstance
        this._onGameInstanceChange.next(this.gameInstance)
    }

    public getGameInstance():GameInstance{
        return this.gameInstance
    }

    public onStart():Observable<boolean>{
        return this._onStart
    }

    public onGameInstanceChange():Observable<GameInstance>{
        return this._onGameInstanceChange
    }

    public onScoreChange():Observable<Score>{
        return this.gameStatusService.subjectScore
    }

    public onLevelChange():Observable<number>{
        return this.gameStatusService.subjectLevel
    }

    public onGameOver():Observable<GameOverType> {
        return this.gameStatusService.subjectGameOver
    }






        gameMock:GameInstance = <GameInstance>{
        "instanceId": "576322f4af21d21adc4adabf",
        "gameId": "5762d2b63e68b5130b5fcd03",
        "levels": [


            {
                "gameProblems": [
                    {
                        "type": "text",
                        "answerType" : "text",
                        "problemExpression": "Text question",
                        "options": [
                            "Response 1",
                            "Response 2",
                            "Response 3"
                        ],
                        "answer": [
                            "Response 1"
                        ]
                    }],

                "scoreConfig": {
                    "baseScore": 10,
                    "preCount": 5,
                    "withTime": true,
                    "extras": [
                        {
                            "name": "Perfecto",
                            "extraTime": 5,
                            "extraScore": 5,
                            "thresholdTime": 5
                        },
                        {
                            "name": "Muy bien",
                            "extraTime": 3,
                            "extraScore": 3,
                            "thresholdTime": 7
                        },
                        {
                            "name": "Bien",
                            "extraTime": 0,
                            "extraScore": 1,
                            "thresholdTime": 10
                        }
                        ]
                }
            },




                    {
                "gameProblems": [
                    {
                        "problemExpression": "{3}x^2 + {-21}x + {30} = 0",
                        "options": [
                            "{3}",
                            "{-2}",
                            "{5}",
                            "{-7}",
                            "{2}"
                        ],
                        "answer": [
                            "{5}",
                            "{2}"
                        ]
                    },
                    {
                        "problemExpression": "{3}x^2 + {-24}x + {45} = 0",
                        "options": [
                            "{3}",
                            "{4}",
                            "{11}",
                            "{5}",
                            "{6}"
                        ],
                        "answer": [
                            "{3}",
                            "{5}"
                        ]
                    },
                    {
                        "problemExpression": "{3}x^2 + {-15}x + {18} = 0",
                        "options": [
                            "{10}",
                            "{-1}",
                            "{3}",
                            "{4}",
                            "{2}"
                        ],
                        "answer": [
                            "{3}",
                            "{2}"
                        ]
                    },
                    {
                        "problemExpression": "{4}x^2 + {-28}x + {40} = 0",
                        "options": [
                            "{2}",
                            "{5}",
                            "{-6}",
                            "{-1}",
                            "{3}"
                        ],
                        "answer": [
                            "{2}",
                            "{5}"
                        ]
                    },
                    {
                        "problemExpression": "{4}x^2 + {-32}x + {64} = 0",
                        "options": [
                            "{4}",
                            "{12}",
                            "{6}",
                            "{10}",
                            "{4}"
                        ],
                        "answer": [
                            "{4}",
                            "{4}"
                        ]
                    }
                ],
                "scoreConfig": {
                    "baseScore": 10,
                    "preCount": 5,
                    "withTime": true,
                    "extras": [
                        {
                            "name": "Perfecto",
                            "extraTime": 5,
                            "extraScore": 5,
                            "thresholdTime": 5
                        },
                        {
                            "name": "Muy bien",
                            "extraTime": 3,
                            "extraScore": 3,
                            "thresholdTime": 7
                        },
                        {
                            "name": "Bien",
                            "extraTime": 0,
                            "extraScore": 1,
                            "thresholdTime": 10
                        }
                    ]
                }
            },
            {
                "gameProblems": [
                    {
                        "type" : "math",
                        "answerType" : "text",
                        "problemExpression": "( a \\land F )",
                        "options": [
                            "Tautología",
                            "Verdadero",
                            "Falso",
                            "Contradicción"
                        ],
                        "answer": [
                            "Contradicción"
                        ]
                    },
                    {
                        "type" : "math",
                        "answerType" : "text",
                        "problemExpression": "( T \\land b )",
                        "options": [
                            "Tautología",
                            "Verdadero",
                            "Falso",
                            "Contradicción"
                        ],
                        "answer": [
                            "Falso"
                        ]
                    },
                    {
                        "type" : "math",
                        "answerType" : "text",
                        "problemExpression": "( T \\Leftrightarrow b )",
                        "options": [
                            "Tautología",
                            "Verdadero",
                            "Falso",
                            "Contradicción"
                        ],
                        "answer": [
                            "Verdadero"
                        ]
                    }
                ],
                "scoreConfig": {
                    "baseScore": 10,
                    "preCount": 0,
                    "withTime": true,
                    "extras": [
                        {
                            "name": "Perfecto",
                            "extraTime": 5,
                            "extraScore": 5,
                            "thresholdTime": 5
                        },
                        {
                            "name": "Muy bien",
                            "extraTime": 3,
                            "extraScore": 3,
                            "thresholdTime": 7
                        },
                        {
                            "name": "Bien",
                            "extraTime": 0,
                            "extraScore": 1,
                            "thresholdTime": 10
                        }
                    ]
                }
            },
            {
                "gameProblems": [
                    {
                        "problemExpression": "( {1} - {3} ) = ",
                        "options": [
                            "{1}",
                            "{-6}",
                            "{-2}",
                            "{-12}",
                            "{-4}"
                        ],
                        "answer": [
                            "{-2}"
                        ]
                    },
                    {
                        "problemExpression": "( {4} + {3} ) = ",
                        "options": [
                            "{-3}",
                            "{5}",
                            "{6}",
                            "{7}",
                            "{15}"
                        ],
                        "answer": [
                            "{7}"
                        ]
                    },
                    {
                        "problemExpression": "( {5} + {1} ) = ",
                        "options": [
                            "{3}",
                            "{6}",
                            "{-2}",
                            "{14}",
                            "{-4}"
                        ],
                        "answer": [
                            "{6}"
                        ]
                    },
                    {
                        "problemExpression": "( {4} + {2} ) = ",
                        "options": [
                            "{12}",
                            "{6}",
                            "{0}",
                            "{-2}",
                            "{2}"
                        ],
                        "answer": [
                            "{6}"
                        ]
                    },
                    {
                        "problemExpression": "( {2} - {4} ) = ",
                        "options": [
                            "{-9}",
                            "{-3}",
                            "{-12}",
                            "{-11}",
                            "{-2}"
                        ],
                        "answer": [
                            "{-2}"
                        ]
                    }
                ],
                "scoreConfig": {
                    "baseScore": 10,
                    "preCount": 0,
                    "withTime": true,
                    "extras": [
                        {
                            "name": "Perfecto",
                            "extraTime": 5,
                            "extraScore": 5,
                            "thresholdTime": 5
                        },
                        {
                            "name": "Muy bien",
                            "extraTime": 3,
                            "extraScore": 3,
                            "thresholdTime": 7
                        },
                        {
                            "name": "Bien",
                            "extraTime": 0,
                            "extraScore": 1,
                            "thresholdTime": 10
                        }
                    ]
                }
            },
            {
                "gameProblems": [
                    {
                        "problemExpression": "\\begin{cases} {2}x - {5}y + {3} = {-14} \\\\{3}x - {1}y + {5} = {12} \\\\\\end{cases}",
                        "options": [
                            "x = {4}\\: y = {5}",
                            "x = {-6}\\: y = {-5}",
                            "x = {-4}\\: y = {-3}"
                        ],
                        "answer": [
                            "x = {4}\\: y = {5}"
                        ]
                    },
                    {
                        "problemExpression": "\\begin{cases} {5}x + {2}y + {3} = {17} \\\\{1}x + {3}y + {2} = {10} \\\\\\end{cases}",
                        "options": [
                            "x = {-8}\\: y = {-7}",
                            "x = {2}\\: y = {2}",
                            "x = {-6}\\: y = {-5}"
                        ],
                        "answer": [
                            "x = {2}\\: y = {2}"
                        ]
                    },
                    {
                        "problemExpression": "\\begin{cases} {4}x - {4}y + {4} = {16} \\\\{4}x - {1}y + {2} = {17} \\\\\\end{cases}",
                        "options": [
                            "x = {4}\\: y = {1}",
                            "x = {-6}\\: y = {-5}",
                            "x = {-4}\\: y = {-3}"
                        ],
                        "answer": [
                            "x = {4}\\: y = {1}"
                        ]
                    }
                ],
                "scoreConfig": {
                    "baseScore": 10,
                    "preCount": 0,
                    "withTime": true,
                    "extras": [
                        {
                            "name": "Perfecto",
                            "extraTime": 5,
                            "extraScore": 5,
                            "thresholdTime": 5
                        },
                        {
                            "name": "Muy bien",
                            "extraTime": 3,
                            "extraScore": 3,
                            "thresholdTime": 7
                        },
                        {
                            "name": "Bien",
                            "extraTime": 0,
                            "extraScore": 1,
                            "thresholdTime": 10
                        }
                    ]
                }
            },
            {
                "gameProblems": [
                    {
                        "problemExpression": "{3}^{4}\\equiv x_{({4})}",
                        "options": [
                            "{1}",
                            "{2}",
                            "{3}",
                            "{0}"
                        ],
                        "answer": [
                            "{1}"
                        ]
                    },
                    {
                        "problemExpression": "{4}^{3}\\equiv x_{({2})}",
                        "options": [
                            "{1}",
                            "{0}"
                        ],
                        "answer": [
                            "{0}"
                        ]
                    },
                    {
                        "problemExpression": "{4}^{3}\\equiv x_{({3})}",
                        "options": [
                            "{1}",
                            "{2}",
                            "{0}"
                        ],
                        "answer": [
                            "{1}"
                        ]
                    }
                ],
                "scoreConfig": {
                    "baseScore": 10,
                    "preCount": 0,
                    "withTime": true,
                    "extras": [
                        {
                            "name": "Perfecto",
                            "extraTime": 5,
                            "extraScore": 5,
                            "thresholdTime": 5
                        },
                        {
                            "name": "Muy bien",
                            "extraTime": 3,
                            "extraScore": 3,
                            "thresholdTime": 7
                        },
                        {
                            "name": "Bien",
                            "extraTime": 0,
                            "extraScore": 1,
                            "thresholdTime": 10
                        }
                    ]
                }
            }
        ]
    };







}

