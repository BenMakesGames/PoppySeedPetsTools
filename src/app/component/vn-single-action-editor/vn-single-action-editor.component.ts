import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StoryChoiceActionModel} from "../../model/story-choice-action.model";
import {StoryChoiceActionExitModel} from "../../model/story-choice-action-exit.model";
import {StoryChoiceActionReceiveItemModel} from "../../model/story-choice-action-receive-item.model";
import {StoryChoiceActionSetStepModel} from "../../model/story-choice-action-set-step.model";
import {StorySectionModel} from "../../model/story-section.model";

@Component({
  selector: 'app-vn-single-action-editor',
  templateUrl: './vn-single-action-editor.component.html',
  styleUrls: ['./vn-single-action-editor.component.scss']
})
export class VnSingleActionEditorComponent implements OnInit {

  readonly ACTION_TYPES = [
    'exit', 'receiveItem', 'setStep'
  ];

  @Input() storySections: StorySectionModel[];

  @Input() action: StoryChoiceActionModel;
  @Output() actionOutput = new EventEmitter<StoryChoiceActionModel>();

  constructor() { }

  ngOnInit() {
  }

  doChangeType(newType: string)
  {
    switch(newType)
    {
      case 'exit':
        this.action = <StoryChoiceActionExitModel>{ type: 'exit' };
        break;

      case 'receiveItem':
        this.action = <StoryChoiceActionReceiveItemModel>{
          type: 'receiveItem',
          item: '',
          description: '%user.name% received this!'
        };
        break;

      case 'setStep':
        this.action = <StoryChoiceActionSetStepModel>{
          type: 'setStep',
          step: 0,
        };
        break;
    }

    this.actionOutput.emit(this.action);
  }

}
