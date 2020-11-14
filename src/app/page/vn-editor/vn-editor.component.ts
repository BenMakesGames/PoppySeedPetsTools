import { Component, OnInit } from '@angular/core';
import {StorySectionModel} from "../../model/story-section.model";
import {StoryModel} from "../../model/story.model";

@Component({
  selector: 'app-vn-editor',
  templateUrl: './vn-editor.component.html',
  styleUrls: ['./vn-editor.component.scss']
})
export class VnEditorComponent implements OnInit {

  readonly SECTION_STYLES = [
    'dialog', 'description', 'fullFramePicture'
  ];

  fileReader: FileReader;

  stories: StoryModel[];
  storySections: StorySectionModel[];

  selectedStoryId: number|null;
  selectedSections: StorySectionModel[];

  expandedSectionId;

  constructor() { }

  ngOnInit() {
    this.fileReader = new FileReader();

    this.fileReader.onloadend = () => {
      const text = <string>this.fileReader.result;
      const data = JSON.parse(text);

      this.stories = data.find(o => o.type === 'table' && o.name === 'story').data;
      this.storySections = data.find(o => o.type === 'table' && o.name === 'story_section').data;

      if(this.stories.length > 0)
        this.doSelectStory(this.stories[0].id);

      console.log(data);
    };
  }

  doExpandCollapse(sectionId)
  {
    if(sectionId == this.expandedSectionId)
      this.expandedSectionId = null;
    else
      this.expandedSectionId = sectionId;
  }

  doSelectStory(storyId: number)
  {
    this.selectedStoryId = storyId;
    this.selectedSections = this.storySections.filter(ss => ss.story_id == storyId);
  }

  doAddSection()
  {
    const largestId = Math.max(...this.storySections.map(ss => ss.id));

    this.storySections.push({
      id: largestId + 1,
      story_id: this.selectedStoryId,
      style: this.SECTION_STYLES[0],
      background: null,
      image: null,
      content: '',
      choices: []
    });

    this.doSelectStory(this.selectedStoryId);
  }

  doDeleteSection(sectionId)
  {
    this.storySections = this.storySections.filter(ss => ss.id != sectionId);

    if(this.expandedSectionId == sectionId)
      this.expandedSectionId = null;

    this.doSelectStory(this.selectedStoryId);
  }

  doNoFile()
  {
    this.stories = [];
    this.storySections = [];
  }

  doSelectFile(event) {
    const file: File = event.target.files[0];

    this.fileReader.readAsText(file);
  }

}
