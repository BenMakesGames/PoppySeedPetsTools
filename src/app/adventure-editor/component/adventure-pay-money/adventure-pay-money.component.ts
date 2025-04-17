import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Onward, PayMoneys} from "../adventure/adventure.component";

@Component({
    selector: 'app-adventure-pay-money',
    templateUrl: './adventure-pay-money.component.html',
    styleUrl: './adventure-pay-money.component.scss',
    standalone: false
})
export class AdventurePayMoneyComponent {
  @Input() adventure: PayMoneys;
  @Output() adventureChange = new EventEmitter<PayMoneys>();

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
