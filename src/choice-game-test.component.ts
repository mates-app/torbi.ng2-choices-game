/**
 * Created by josecullen on 30/08/16.
 */
import { Component} from '@angular/core';
import {GameProblem, GameLevel, ScoreConfig, ExtraScore, Score} from './models'
import {ToolbarConfig} from "./commons/toolbar/toolbar.component";
import {GameControl} from "./services/game-control";


@Component({
    selector: 'tbt-choices-game',
    template: `
        <!--<game-toolbar></game-toolbar>-->
        <game-view>
            <first-level-body>
                <h2 style="color: ghostwhite">Enjoy the game!</h2>
            </first-level-body>
            <level-load-body>
                <h3>This is the body</h3>
                <p>Here we can inject the html to show when game-view shows de level-load</p>
                <effectivity-content></effectivity-content>                
            </level-load-body>
            
            <game-over-body>
                <effectivity-content [isGameOver]="true"></effectivity-content>
            </game-over-body>
        </game-view>
        
        <button (click)="setGame()">Set Game</button>
        <button (click)="start()">Start</button>
        
        <p>{{logs}}</p>
        <!--<level-play-->
            <!--[gameProblem]="gameProblem"-->
            <!--[gameLevel]="gameLevel"-->
            <!--[toolbarConfig]="toolbarConfig"-->
        <!--&gt;</level-play>-->
        <!--<level-load></level-load>-->
        <!--<h1>{{post.title}}</h1>-->
        <!--<h6>{{post.author}} {{post.date}}</h6>-->
        <!--<h5>{{post.content}}</h5>-->
        <!--<answer-buttons [answers]="answers">-->
        <!--</answer-buttons>-->
        <!--<math-problem-expression [problemExpression]="expression"></math-problem-expression>-->
    `
})
export class ChoiceGameTest{
    answers:Array<string> = ["hola", "loquito"]
    expression:string = '3 + 5 \\cup '
    gameProblem:GameProblem = new GameProblem('2 + 4', '2 + 4 = 6', ['2', '6', '10'], ['6']);
    gameLevel:GameLevel = new GameLevel([this.gameProblem], new ScoreConfig(10,10,true, [new ExtraScore()]));
    toolbarConfig:ToolbarConfig = new ToolbarConfig();
    logs:string = ''


    constructor(
        private gameControl:GameControl){

        this.gameControl.onGameInstanceChange().subscribe(GameInstance => this.logs = 'Game Instance Change!')
        this.gameControl.onStart().subscribe(() => this.logs = 'started!')
        this.gameControl.onScoreChange().subscribe( (score:Score) => this.logs = `score to add : ${score.allScore()}`)

    }

    setGame(){
        this.gameControl.setGameInstance(this.gameControl.gameMock)
    }

    start(){
        this.gameControl.start()
    }


}

