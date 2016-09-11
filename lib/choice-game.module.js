"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by josecullen on 28/08/16.
 */
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var answer_buttons_component_1 = require("./commons/answer-buttons/answer-buttons.component");
var card_1 = require('@angular2-material/card');
var button_1 = require('@angular2-material/button');
var grid_list_1 = require('@angular2-material/grid-list');
var icon_1 = require('@angular2-material/icon');
var mathjax_directive_1 = require("./commons/mathjax/mathjax.directive");
var math_problem_expression_component_1 = require("./commons/math-problem-expression/math-problem-expression.component");
var popup_component_1 = require("./commons/popup/popup.component");
var timer_service_1 = require("./services/timer.service");
var game_status_service_1 = require("./services/game-status.service");
var toolbar_component_1 = require("./commons/toolbar/toolbar.component");
var counter_component_1 = require("./commons/counter/counter.component");
var level_load_component_1 = require("./level-load/level-load.component");
var level_play_component_1 = require("./level-play/level-play.component");
var game_view_component_1 = require("./game-view/game-view.component");
var choice_game_test_component_1 = require("./choice-game-test.component");
var game_control_1 = require("./services/game-control");
var game_over_component_1 = require("./game-over/game-over.component");
var progress_bar_1 = require("@angular2-material/progress-bar");
var progress_circle_1 = require("@angular2-material/progress-circle/progress-circle");
var effectivity_circle_component_1 = require("./commons/effectivity-circle/effectivity-circle.component");
var ChoiceGameModule = (function () {
    function ChoiceGameModule() {
    }
    ChoiceGameModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                button_1.MdButtonModule,
                icon_1.MdIconModule,
                card_1.MdCardModule,
                grid_list_1.MdGridListModule,
                progress_bar_1.MdProgressBarModule,
                progress_circle_1.MdProgressCircleModule
            ],
            exports: [
                choice_game_test_component_1.ChoiceGameTest,
                game_view_component_1.GameViewComponent,
                game_over_component_1.GameOverBody,
                level_load_component_1.LevelLoadBody,
                effectivity_circle_component_1.EffectivityCircle
            ],
            declarations: [
                choice_game_test_component_1.ChoiceGameTest,
                answer_buttons_component_1.AnswerButtonsComponent,
                counter_component_1.CounterComponent,
                mathjax_directive_1.MathJaxDirective,
                math_problem_expression_component_1.MathProblemExpression,
                popup_component_1.PopupComponent,
                toolbar_component_1.ToolbarComponent,
                level_load_component_1.LoadingLevelComponent,
                level_play_component_1.PlayingLevelComponent,
                game_view_component_1.GameViewComponent,
                level_load_component_1.LevelLoadBody,
                game_over_component_1.GameOverBody,
                game_over_component_1.GameOverComponent,
                effectivity_circle_component_1.EffectivityCircle
            ],
            providers: [
                timer_service_1.TimerService,
                game_status_service_1.GameStatusService,
                game_control_1.GameControl
            ],
            bootstrap: [choice_game_test_component_1.ChoiceGameTest]
        }), 
        __metadata('design:paramtypes', [])
    ], ChoiceGameModule);
    return ChoiceGameModule;
}());
exports.ChoiceGameModule = ChoiceGameModule;
//# sourceMappingURL=choice-game.module.js.map