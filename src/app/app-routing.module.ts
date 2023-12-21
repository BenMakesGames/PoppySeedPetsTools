import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewItemComponent} from "./page/new-item/new-item.component";
import {NewSpeciesComponent} from "./page/new-species/new-species.component";
import {NewHatComponent} from "./page/new-hat/new-hat.component";
import {HomeComponent} from "./page/home/home.component";
import {VnEditorComponent} from "./page/vn-editor/vn-editor.component";
import {AdventureEditorComponent} from "./page/adventure-editor/adventure-editor.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'newTool', component: NewItemComponent },
  { path: 'newHat', component: NewHatComponent },
  { path: 'newSpecies', component: NewSpeciesComponent },
  { path: 'vnEditor', component: VnEditorComponent },
  { path: 'adventureEditor', component: AdventureEditorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
