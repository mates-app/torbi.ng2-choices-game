/**
 * Created by josecullen on 30/08/16.
 */
"use strict";
var GameInstance = (function () {
    function GameInstance(instanceId, gameId, levels) {
        if (instanceId === void 0) { instanceId = ""; }
        if (gameId === void 0) { gameId = ""; }
        if (levels === void 0) { levels = new Array(); }
        this.instanceId = instanceId;
        this.gameId = gameId;
        this.levels = levels;
    }
    return GameInstance;
}());
exports.GameInstance = GameInstance;
var GameLevel = (function () {
    function GameLevel(gameProblems, scoreConfig) {
        this.gameProblems = gameProblems;
        this.scoreConfig = scoreConfig;
    }
    return GameLevel;
}());
exports.GameLevel = GameLevel;
var GameProblem = (function () {
    function GameProblem(problemExpression, solvedExpression, answerOptions, answer) {
        if (problemExpression === void 0) { problemExpression = ''; }
        if (solvedExpression === void 0) { solvedExpression = ''; }
        if (answerOptions === void 0) { answerOptions = ['']; }
        if (answer === void 0) { answer = ['']; }
        this.problemExpression = problemExpression;
        this.solvedExpression = solvedExpression;
        this.answerOptions = answerOptions;
        this.answer = answer;
    }
    return GameProblem;
}());
exports.GameProblem = GameProblem;
var ScoreConfig = (function () {
    function ScoreConfig(baseScore, preCount, withTime, extras) {
        this.baseScore = baseScore;
        this.preCount = preCount;
        this.withTime = withTime;
        this.extras = extras;
    }
    return ScoreConfig;
}());
exports.ScoreConfig = ScoreConfig;
var ExtraScore = (function () {
    function ExtraScore(name, extraTime, extraScore, thresholdTime) {
        if (name === void 0) { name = ""; }
        if (extraTime === void 0) { extraTime = 0; }
        if (extraScore === void 0) { extraScore = 0; }
        if (thresholdTime === void 0) { thresholdTime = 100; }
        this.name = name;
        this.extraTime = extraTime;
        this.extraScore = extraScore;
        this.thresholdTime = thresholdTime;
    }
    return ExtraScore;
}());
exports.ExtraScore = ExtraScore;
var Score = (function () {
    function Score(base, extra) {
        if (base === void 0) { base = 0; }
        if (extra === void 0) { extra = 0; }
        this.base = base;
        this.extra = extra;
    }
    Score.prototype.allScore = function () {
        return this.base + this.extra;
    };
    return Score;
}());
exports.Score = Score;
(function (GameOverType) {
    GameOverType[GameOverType["TIME"] = 0] = "TIME";
    GameOverType[GameOverType["LEVELS"] = 1] = "LEVELS";
    GameOverType[GameOverType["LIVES"] = 2] = "LIVES";
})(exports.GameOverType || (exports.GameOverType = {}));
var GameOverType = exports.GameOverType;
var Post = (function () {
    function Post(author, date, title, content) {
        this.author = author;
        this.date = date;
        this.title = title;
        this.content = content;
    }
    return Post;
}());
exports.Post = Post;
//# sourceMappingURL=models.js.map