import { Component } from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";

@Component({
  templateUrl: './import-adventure.component.html',
  styleUrl: './import-adventure.component.scss'
})
export class ImportAdventureComponent {
  jsonText = '';
  error: string|null = null;

  constructor(private dialogRef: MatDialogRef<ImportAdventureComponent>) {
  }

  doImport()
  {
    // TODO: validate that the JSON is valid
    let json = null;

    try
    {
      json = JSON.parse(this.jsonText);
    }
    catch
    {
    }

    if(json)
      this.dialogRef.close({ json: json });
    else
      this.error = 'Invalid JSON.';
  }

  doCancel()
  {
    this.dialogRef.close();
  }

  static showDialog(matDialog: MatDialog)
  {
    return matDialog.open(ImportAdventureComponent, {
      width: '80vw',
      maxWidth: '640px'
    });
  }
}
