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
var ChoiceGameTest = (function () {
    function ChoiceGameTest() {
        this.answers = ["hola", "barbi"];
        this.expression = '3 + 5 \\cup ';
        this.gameProblem = new models_1.GameProblem('2 + 4', '2 + 4 = 6', ['2', '6', '10'], ['6']);
        this.gameLevel = new models_1.GameLevel([this.gameProblem], new models_1.ScoreConfig(10, 10, true, [new models_1.ExtraScore()]));
        this.toolbarConfig = new toolbar_component_1.ToolbarConfig();
        this.post = new models_1.Post('', '', '', '');
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', models_1.Post)
    ], ChoiceGameTest.prototype, "post", void 0);
    ChoiceGameTest = __decorate([
        core_1.Component({
            selector: 'tbt-post',
            template: "\n        <game-toolbar></game-toolbar>\n        <game-view></game-view>\n        <level-play\n            [gameProblem]=\"gameProblem\"\n            [gameLevel]=\"gameLevel\"\n            [toolbarConfig]=\"toolbarConfig\"\n        ></level-play>\n        <level-load></level-load>\n        <h1>{{post.title}}</h1>\n        <h6>{{post.author}} {{post.date}}</h6>\n        <h5>{{post.content}}</h5>\n        <answer-buttons [answers]=\"answers\">\n        </answer-buttons>\n        <math-problem-expression [problemExpression]=\"expression\"></math-problem-expression>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], ChoiceGameTest);
    return ChoiceGameTest;
}());
exports.ChoiceGameTest = ChoiceGameTest;
//# sourceMappingURL=choice-game-test.component.js.map