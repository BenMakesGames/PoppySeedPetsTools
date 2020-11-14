import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {StoryChoiceModel} from "../../model/story-choice.model";
import {StorySectionModel} from "../../model/story-section.model";

@Component({
  selector: 'app-vn-choices-editor',
  templateUrl: './vn-choices-editor.component.html',
  styleUrls: ['./vn-choices-editor.component.scss']
})
export class VnChoicesEditorComponent implements OnInit, OnChanges {

  @Input() storySections: StorySectionModel[];

  @Input() choices: string;
  @Output() choicesOutput = new EventEmitter<string>();

  choicesData: StoryChoiceModel[];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges)
  {
    if(changes.choices)
    {
      this.choicesData = JSON.parse(this.choices);
    }
  }

  doUpdateChoice(updatedChoice: StoryChoiceModel)
  {
    this.notifyParent();
  }

  doDeleteChoice(choice)
  {
    this.choicesData = this.choicesData.filter(c => c !== choice);

    this.notifyParent();
  }

  doAddChoice()
  {
    this.choicesData.push({
      text: '',
      actions: [
        { type: 'exit' }
      ]
    });

    this.notifyParent();
  }

  private notifyParent()
  {
    this.choicesOutput.emit(JSON.stringify(this.choicesData));
  }

}
