/**
 * Created by josecullen on 28/08/16.
 */
import { NgModule, Directive }      from '@angular/core';
import { MaterialModule }      from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import {AnswerButtonsComponent} from "./commons/answer-buttons/answer-buttons.component";


import {MathJaxDirective} from "./commons/mathjax/mathjax.directive";
import {MathProblemExpression} from "./commons/math-problem-expression/math-problem-expression.component";
import {PopupComponent} from "./commons/popup/popup.component";
import {TimerService} from "./services/timer.service";
import {GameStatusService} from "./services/game-status.service";
import {ToolbarComponent} from "./commons/toolbar/toolbar.component";
import {CounterComponent} from "./commons/counter/counter.component";
import {LoadingLevelComponent, LevelLoadBody, FirstLevelBody} from "./level-load/level-load.component";
import {PlayingLevelComponent} from "./level-play/level-play.component";
import {GameViewComponent} from "./game-view/game-view.component";
import {ChoiceGameTest, MdProgressCircleFake} from "./choice-game-test.component";
import {GameControl} from "./services/game-control";
import {GameOverBody, GameOverComponent} from "./game-over/game-over.component";
import {EffectivityCircle} from "./commons/effectivity-circle/effectivity-circle.component";
import {EffectivityContent} from "./commons/effectivity-content/effectivity-content";

@NgModule({
    imports:      [
        BrowserModule,
        MaterialModule.forRoot()
    ],
    exports: [
        ChoiceGameTest,
        GameViewComponent,
        GameOverBody,
        LevelLoadBody,
        FirstLevelBody,
        EffectivityCircle,
        EffectivityContent
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
        GameOverComponent,
        EffectivityCircle,
        EffectivityContent,
        FirstLevelBody,
        
    ],
    providers: [
        TimerService,
        GameStatusService,
        GameControl
    ],
    bootstrap:    [ ChoiceGameTest ]
})
export class ChoiceGameModule { }



