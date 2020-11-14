import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StoryChoiceModel} from "../../model/story-choice.model";
import {StorySectionModel} from "../../model/story-section.model";

@Component({
  selector: 'app-vn-single-choice-editor',
  templateUrl: './vn-single-choice-editor.component.html',
  styleUrls: ['./vn-single-choice-editor.component.scss']
})
export class VnSingleChoiceEditorComponent implements OnInit {

  @Input() storySections: StorySectionModel[];

  @Input() choice: StoryChoiceModel;
  @Output() choiceOutput = new EventEmitter<StoryChoiceModel>();

  constructor() { }

  ngOnInit() {
  }
}
