import { Component } from '@angular/core';
import {Adventure, Onward} from "../../component/adventure/adventure.component";
import {MatDialog} from "@angular/material/dialog";
import {ImportAdventureComponent} from "../../dialog/import-adventure/import-adventure.component";

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

  constructor(private matDialog: MatDialog) {
  }

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

  doImport()
  {
    ImportAdventureComponent.showDialog(this.matDialog).afterClosed().subscribe({
      next: r => {
        if(r.json)
        {
          this.adventure = r.json;
          this.doUpdateAdventureJson();
        }
      }
    });
  }
}
