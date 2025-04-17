import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Onward, PayItem} from "../adventure/adventure.component";

@Component({
    selector: 'app-adventure-pay-item',
    templateUrl: './adventure-pay-item.component.html',
    styleUrl: './adventure-pay-item.component.scss',
    standalone: false
})
export class AdventurePayItemComponent {
  @Input() adventure: PayItem;
  @Output() adventureChange = new EventEmitter<PayItem>();

  doUpdateAdventure()
  {
    this.adventureChange.emit(this.adventure);
  }

  doToggleIfNotPaid()
  {
    let newAdventure = { ... this.adventure };

    if(newAdventure.ifNotPaid)
      delete newAdventure.ifNotPaid;
    else
    {
      newAdventure.ifNotPaid = <Onward>{
        type: 'onward',
        description: '???',
        buttonText: 'Onward!',
      };
    }

    this.adventureChange.emit(newAdventure);
  }
}
