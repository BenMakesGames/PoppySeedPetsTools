import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ChooseOne, Onward} from "../adventure/adventure.component";

@Component({
    selector: 'app-adventure-choose-one',
    templateUrl: './adventure-choose-one.component.html',
    styleUrl: './adventure-choose-one.component.scss',
    standalone: false
})
export class AdventureChooseOneComponent {
  @Input() adventure: ChooseOne;
  @Output() adventureChange = new EventEmitter<ChooseOne>();

  doAddChoice()
  {
    this.adventure.buttons.push('???');
    this.adventure.outcomes.push(<Onward>{
      type: 'onward',
      description: '???',
      buttonText: 'Onward!',
    });

    this.doUpdateAdventure();
  }

  doDeleteChoice(index: number)
  {
    this.adventure.buttons.splice(index, 1);
    this.adventure.outcomes.splice(index, 1);

    this.doUpdateAdventure();
  }

  doUpdateAdventure()
  {
    this.adventureChange.emit(this.adventure);
  }

  doUpdateButton(index: number, event)
  {
    this.adventure.buttons[index] = event.target.value;
    this.doUpdateAdventure();
  }
}
