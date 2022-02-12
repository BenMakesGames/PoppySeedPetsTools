import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StoryChoiceActionModel} from "../../model/story-choice-action.model";
import {StoryChoiceActionReceiveItemModel} from "../../model/story-choice-action-receive-item.model";
import {StoryChoiceActionSetStepModel} from "../../model/story-choice-action-set-step.model";
import {StorySectionModel} from "../../model/story-section.model";
import {GraphChangesService} from "../../service/graph-changes.service";
import {StoryChoiceActionExitModel} from "../../model/story-choice-action-exit.model";

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
  @Output() actionChange = new EventEmitter<StoryChoiceActionModel>();

  setStepChoiceAction = () => <StoryChoiceActionSetStepModel>this.action;

  constructor(private graphChanges: GraphChangesService) { }

  ngOnInit() {
  }

  doChangeType(newType: string)
  {
    switch(newType)
    {
      case 'exit':
        this.action.type = 'exit';
        break;

      case 'receiveItem':
        this.action.type = 'receiveItem';
        (<StoryChoiceActionReceiveItemModel>this.action).item = '';
        (<StoryChoiceActionReceiveItemModel>this.action).description = '%user.name% received this!';
        break;

      case 'setStep':
        this.action.type = 'setStep';
        (<StoryChoiceActionSetStepModel>this.action).step = this.storySections[0].id;
        break;
    }

    this.actionChange.emit(this.action);

    this.graphChanges.changes.next();
  }

}
