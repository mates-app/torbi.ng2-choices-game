import {Component, Input} from '@angular/core';


@Component({
  selector: 'math-problem-expression',
  template: `
  <div style="margin-top: -10px; color: white">
	<h3 [MathJax]="'$$'+problemExpression+'$$'"></h3>
  </div>
  `
})
export class MathProblemExpression {
  @Input() problemExpression:string;


}
