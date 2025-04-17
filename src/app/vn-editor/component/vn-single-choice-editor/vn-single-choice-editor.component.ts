import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StorySectionModel} from "../../../adventure-editor/model/story-section.model";
import {StoryChoiceModel} from "../../../adventure-editor/model/story-choice.model";

@Component({
    selector: 'app-vn-single-choice-editor',
    templateUrl: './vn-single-choice-editor.component.html',
    styleUrls: ['./vn-single-choice-editor.component.scss'],
    standalone: false
})
export class VnSingleChoiceEditorComponent implements OnInit {

  @Input() storySections: StorySectionModel[];

  @Input() choice: StoryChoiceModel;
  @Output() choiceChange = new EventEmitter<StoryChoiceModel>();

  constructor() { }

  ngOnInit() {
  }
}
