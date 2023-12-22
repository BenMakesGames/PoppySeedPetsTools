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
    this.adventureJson = window.localStorage.getItem('adventureJson');
    if (this.adventureJson)
    {
      this.adventure = JSON.parse(this.adventureJson);
    }

    this.doUpdateAdventureJson();
  }

  doUpdateAdventureJson()
  {
    this.adventureJson = JSON.stringify(this.adventure, null, 4);
    window.localStorage.setItem('adventureJson', this.adventureJson);
  }

  doCopyToClipboard()
  {
    navigator.clipboard.writeText(this.adventureJson);
  }
}
