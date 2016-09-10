/**
 * Created by josecullen on 28/08/16.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AnswerButtonsComponent} from "./commons/answer-buttons/answer-buttons.component";

import { MdCardModule } from '@angular2-material/card';
import { MdButtonModule } from '@angular2-material/button';
import { MdGridListModule } from '@angular2-material/grid-list';
import { MdIconModule } from '@angular2-material/icon';

import {MathJaxDirective} from "./commons/mathjax/mathjax.directive";
import {MathProblemExpression} from "./commons/math-problem-expression/math-problem-expression.component";
import {PopupComponent} from "./commons/popup/popup.component";
import {TimerService} from "./services/timer.service";
import {GameStatusService} from "./services/game-status.service";
import {ToolbarComponent} from "./commons/toolbar/toolbar.component";
import {CounterComponent} from "./commons/counter/counter.component";
import {LoadingLevelComponent, LevelLoadBody} from "./level-load/level-load.component";
import {PlayingLevelComponent} from "./level-play/level-play.component";
import {GameViewComponent} from "./game-view/game-view.component";
import {ChoiceGameTest} from "./choice-game-test.component";
import {GameControl} from "./services/game-control";
import {GameOverBody, GameOverComponent} from "./game-over/game-over.component";
import {MdProgressBarModule} from "@angular2-material/progress-bar";
// ,
// MdProgressBarModule

@NgModule({
    imports:      [
        BrowserModule,
        MdButtonModule,
        MdIconModule,
        MdCardModule,
        MdGridListModule
        ],
    exports: [
        ChoiceGameTest,
        GameViewComponent,
        GameOverBody,
        LevelLoadBody
    ],
    declarations: [
        ChoiceGameTest,
        AnswerButtonsComponent,
        CounterComponent,
        MathJaxDirective,
        MathProblemExpression,
        PopupComponent,
        ToolbarComponent,
        LoadingLevelComponent,
        PlayingLevelComponent,
        GameViewComponent,
        LevelLoadBody,
        GameOverBody,
        GameOverComponent
    ],
    providers: [
        TimerService,
        GameStatusService,
        GameControl
    ],
    bootstrap:    [ ChoiceGameTest ]
})
export class ChoiceGameModule { }
