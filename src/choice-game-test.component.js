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
 * Created by josecullen on 30/08/16.
 */
var core_1 = require('@angular/core');
var models_1 = require('./models');
var toolbar_component_1 = require("./commons/toolbar/toolbar.component");
var game_control_1 = require("./services/game-control");
var ChoiceGameTest = (function () {
    function ChoiceGameTest(gameControl) {
        var _this = this;
        this.gameControl = gameControl;
        this.answers = ["hola", "loquito"];
        this.expression = '3 + 5 \\cup ';
        this.gameProblem = new models_1.GameProblem('2 + 4', '2 + 4 = 6', ['2', '6', '10'], ['6']);
        this.gameLevel = new models_1.GameLevel([this.gameProblem], new models_1.ScoreConfig(10, 10, true, [new models_1.ExtraScore()]));
        this.toolbarConfig = new toolbar_component_1.ToolbarConfig();
        this.logs = '';
        this.gameControl.onGameInstanceChange().subscribe(function (GameInstance) { return _this.logs = 'Game Instance Change!'; });
        this.gameControl.onStart().subscribe(function () { return _this.logs = 'started!'; });
        this.gameControl.onScoreChange().subscribe(function (score) { return _this.logs = "score to add : " + score.allScore(); });
    }
    ChoiceGameTest.prototype.setGame = function () {
        this.gameControl.setGameInstance(this.gameControl.gameMock);
    };
    ChoiceGameTest.prototype.start = function () {
        this.gameControl.start();
    };
    ChoiceGameTest = __decorate([
        core_1.Component({
            selector: 'tbt-choices-game',
            template: "\n        <!--<game-toolbar></game-toolbar>-->\n        <game-view>\n            <level-load-body>\n                <h3>This is the body</h3>\n                    <p>Here we can inject the html to show when game-view shows de level-load</p>\n            </level-load-body>\n        </game-view>\n        \n        <button (click)=\"setGame()\">Set Game</button>\n        <button (click)=\"start()\">Start</button>\n        \n        <p>{{logs}}</p>\n        <!--<level-play-->\n            <!--[gameProblem]=\"gameProblem\"-->\n            <!--[gameLevel]=\"gameLevel\"-->\n            <!--[toolbarConfig]=\"toolbarConfig\"-->\n        <!--&gt;</level-play>-->\n        <!--<level-load></level-load>-->\n        <!--<h1>{{post.title}}</h1>-->\n        <!--<h6>{{post.author}} {{post.date}}</h6>-->\n        <!--<h5>{{post.content}}</h5>-->\n        <!--<answer-buttons [answers]=\"answers\">-->\n        <!--</answer-buttons>-->\n        <!--<math-problem-expression [problemExpression]=\"expression\"></math-problem-expression>-->\n    "
        }), 
        __metadata('design:paramtypes', [game_control_1.GameControl])
    ], ChoiceGameTest);
    return ChoiceGameTest;
}());
exports.ChoiceGameTest = ChoiceGameTest;
//# sourceMappingURL=choice-game-test.component.js.map