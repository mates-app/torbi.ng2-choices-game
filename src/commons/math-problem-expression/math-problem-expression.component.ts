import {Component, Input} from '@angular/core';


@Component({
  selector: 'math-problem-expression',
  template: `
  <div style="margin-top: -10px; color: white">
	<h1 style="color: white; " [MathJax]="'$$'+problemExpression+'$$'"></h1>
  </div>
  `
})
export class MathProblemExpression {
  @Input() problemExpression:string;


}
