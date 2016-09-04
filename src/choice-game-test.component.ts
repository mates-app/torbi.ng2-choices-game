/**
 * Created by josecullen on 30/08/16.
 */
import { Component, Input } from '@angular/core';
import {Post, GameProblem, GameLevel, ScoreConfig, ExtraScore} from './models'
import {ToolbarConfig} from "./commons/toolbar/toolbar.component";

@Component({
    selector: 'tbt-post',
    template: `
        <game-toolbar></game-toolbar>
        <game-view></game-view>
        <level-play
            [gameProblem]="gameProblem"
            [gameLevel]="gameLevel"
            [toolbarConfig]="toolbarConfig"
        ></level-play>
        <level-load></level-load>
        <h1>{{post.title}}</h1>
        <h6>{{post.author}} {{post.date}}</h6>
        <h5>{{post.content}}</h5>
        <answer-buttons [answers]="answers">
        </answer-buttons>
        <math-problem-expression [problemExpression]="expression"></math-problem-expression>
    `
})
export class ChoiceGameTest{
    answers:Array<string> = ["hola", "barbi"]
    expression:string = '3 + 5 \\cup '
    gameProblem:GameProblem = new GameProblem('2 + 4', '2 + 4 = 6', ['2', '6', '10'], ['6']);
    gameLevel:GameLevel = new GameLevel([this.gameProblem], new ScoreConfig(10,10,true, [new ExtraScore()]));
    toolbarConfig:ToolbarConfig = new ToolbarConfig();

    @Input() post:Post = new Post('','','','')

}

