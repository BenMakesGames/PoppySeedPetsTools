import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StoryChoiceModel} from "../../model/story-choice.model";
import {StorySectionModel} from "../../model/story-section.model";

@Component({
  selector: 'app-vn-choices-editor',
  templateUrl: './vn-choices-editor.component.html',
  styleUrls: ['./vn-choices-editor.component.scss']
})
export class VnChoicesEditorComponent implements OnInit {

  @Input() storySections: StorySectionModel[];

  @Input() choices: StoryChoiceModel[];
  @Output() choicesOutput = new EventEmitter<StoryChoiceModel[]>();

  constructor() { }

  ngOnInit() {
  }

  doDeleteChoice(choice)
  {
    this.choices = this.choices.filter(c => c !== choice);
  }

  doAddChoice()
  {
    this.choices.push({
      text: '',
      actions: [
        { type: 'exit' }
      ]
    });
  }
}
