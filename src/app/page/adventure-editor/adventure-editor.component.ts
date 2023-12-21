import { Component } from '@angular/core';
import {Adventure, Onward} from "../../component/adventure/adventure/adventure.component";

@Component({
  selector: 'app-adventure-editor',
  templateUrl: './adventure-editor.component.html',
  styleUrl: './adventure-editor.component.scss'
})
export class AdventureEditorComponent {
  adventure: Adventure = <Onward>{
    type: 'onward',
    description: '???',
    buttonText: 'Onward!',
  };

  adventureJson = '';

  ngOnInit()
  {
    this.doUpdateAdventureJson();
  }

  doUpdateAdventureJson()
  {
    this.adventureJson = JSON.stringify(this.adventure, null, 4);
  }
}
