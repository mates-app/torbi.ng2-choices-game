import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  moduleId : module.id,
  selector: 'answer-buttons',
  templateUrl: 'answer-buttons.component.html',
  styleUrls : ['answer-buttons.component.css']
})
export class AnswerButtonsComponent {
  @Input() answers:Array<string> = new Array();
  @Output() answer:EventEmitter<string> = new EventEmitter<string>();
  constructor(){ };

  sendAnswer(answer:string){
    this.answer.emit(answer);
  }

}
