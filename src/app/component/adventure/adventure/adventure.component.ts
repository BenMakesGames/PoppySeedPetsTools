import {Component, EventEmitter, Input, Output} from '@angular/core';
import {randomItemName} from "../../../helpful-functions";

@Component({
  selector: 'app-adventure',
  templateUrl: './adventure.component.html',
  styleUrl: './adventure.component.scss'
})
export class AdventureComponent {
  @Input() adventure: Adventure;
  @Output() adventureChange = new EventEmitter<Adventure>();

  @Input() hasParents = true;

  isOpen = true;

  doCollapse()
  {
    this.isOpen = !this.isOpen;
  }

  doUpdateAdventure(adventure: Adventure)
  {
    this.adventure = adventure;
    this.adventureChange.emit(this.adventure);
  }

  doChangeAdventureType()
  {
    this.adventure = { ... this.adventure };

    switch(this.adventure.type)
    {
      case 'onward':
        this.adventure = <Onward>{
          type: 'onward',
          description: this.adventure.description,
          buttonText: 'Onward!',
        };
        break;

      case 'chooseOne':
        this.adventure = <ChooseOne>{
          type: 'chooseOne',
          description: this.adventure.description,
          buttons: ['???', '???'],
          outcomes: [
            <Onward>{
              type: 'onward',
              description: '???',
              buttonText: 'Onward!',
            },
            <Onward>{
              type: 'onward',
              description: '???',
              buttonText: 'Onward!',
            }
          ]
        };
        break;

      /*
      case 'moveTo':
        this.adventure = <MoveTo>{
          type: 'moveTo',
          description: this.adventure.description,
          buttonText: 'Onward!',
          id: 0
        };
        break;
        */

      case 'payItem?':
        this.adventure = <PayItem>{
          type: 'payItem?',
          description: this.adventure.description,
          item: randomItemName(),
          ifPaid: <Onward>{
            type: 'onward',
            description: '???',
            buttonText: 'Onward!',
          }
        };
        break;

      case 'payMoneys?':
        this.adventure = <PayMoneys>{
          type: 'payMoneys?',
          description: this.adventure.description,
          amount: 1,
          ifPaid: <Onward>{
            type: 'onward',
            description: '???',
            buttonText: 'Onward!',
          }
        };
        break;

      case 'payItemAndMoneys?':
        this.adventure = <PayItemAndMoneys>{
          type: 'payItemAndMoneys?',
          description: this.adventure.description,
          amount: 1,
          item: randomItemName(),
          ifPaid: <Onward>{
            type: 'onward',
            description: '???',
            buttonText: 'Onward!',
          }
        };
        break;

      case 'petChallenge':
        this.adventure = <PetChallenge>{
          type: 'petChallenge',
          description: this.adventure.description,
          buttonText: 'Try it!',
          stats: [ 'perception' ],
          baseRoll: 20,
          requiredRoll: 15,
          ifSucceed: <Onward>{
            type: 'onward',
            description: '???',
            buttonText: 'Onward!',
          },
          ifFail: <Onward>{
            type: 'onward',
            description: '???',
            buttonText: 'Onward!',
          }
        };
        break;

      default:
        throw 'bad adventure type!';
    }

    this.adventureChange.emit(this.adventure);
  }
}

export interface Adventure {
  type?: string;
  description: string;
}

export interface Onward extends Adventure
{
  type: 'onward';
  buttonText: string;
  food?: number;
  safety?: number;
  love?: number;
  esteem?: number;
  exp?: { amount: number, stats: string[] };
  receiveItems?: string[];
}

export interface PetChallenge extends Adventure
{
  type: 'petChallenge';
  description: string;
  buttonText: string;
  stats: string[];
  baseRoll: number;
  requiredRoll: number;
  ifSucceed: Adventure;
  ifFail: Adventure;
}

export interface MoveTo extends Adventure
{
  type: 'moveTo';
  description: string;
  buttonText: string;
  id: number;
}

export interface PayItem extends Adventure
{
  type: 'payItem?';
  description: string;
  item: string;
  ifPaid: Adventure;
}

export interface PayMoneys extends Adventure
{
  type: 'payMoneys?';
  description: string;
  amount: number;
  ifPaid: Adventure;
}

export interface PayItemAndMoneys extends Adventure
{
  type: 'payItemAndMoneys?';
  description: string;
  amount: number;
  item: string;
  ifPaid: Adventure;
}

export interface ChooseOne extends Adventure
{
  type: 'chooseOne';
  description: string;
  buttons: string[];
  outcomes: Adventure[];
}
