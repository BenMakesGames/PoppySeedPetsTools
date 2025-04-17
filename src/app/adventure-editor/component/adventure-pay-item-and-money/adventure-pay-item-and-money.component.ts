import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Onward, PayItemAndMoneys} from "../adventure/adventure.component";

@Component({
    selector: 'app-adventure-pay-item-and-money',
    templateUrl: './adventure-pay-item-and-money.component.html',
    styleUrl: './adventure-pay-item-and-money.component.scss',
    standalone: false
})
export class AdventurePayItemAndMoneyComponent {
  @Input() adventure: PayItemAndMoneys;
  @Output() adventureChange = new EventEmitter<PayItemAndMoneys>();

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
