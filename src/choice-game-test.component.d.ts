import { Post, GameProblem, GameLevel } from './models';
import { ToolbarConfig } from "./commons/toolbar/toolbar.component";
export declare class TbtPost {
    answers: Array<string>;
    expression: string;
    gameProblem: GameProblem;
    gameLevel: GameLevel;
    toolbarConfig: ToolbarConfig;
    post: Post;
}
