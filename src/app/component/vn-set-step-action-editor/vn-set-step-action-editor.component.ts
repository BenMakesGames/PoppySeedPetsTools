import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StorySectionModel} from "../../model/story-section.model";
import {StoryChoiceActionSetStepModel} from "../../model/story-choice-action-set-step.model";
import {GraphChangesService} from "../../service/graph-changes.service";

@Component({
  selector: 'app-vn-set-step-action-editor',
  templateUrl: './vn-set-step-action-editor.component.html',
  styleUrls: ['./vn-set-step-action-editor.component.scss']
})
export class VnSetStepActionEditorComponent implements OnInit {

  @Input() storySections: StorySectionModel[];
  @Input() action: StoryChoiceActionSetStepModel;
  @Output() actionChange = new EventEmitter<StoryChoiceActionSetStepModel>();

  constructor(private graphChanges: GraphChangesService) { }

  ngOnInit(): void {
  }

  doChangeStep()
  {
    this.actionChange.emit(this.action);

    this.graphChanges.changes.next();
  }

}
