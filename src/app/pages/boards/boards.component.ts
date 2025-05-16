import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faBox, faWaveSquare,faClock ,faAngleUp, faAngleDown,faHeart,faBorderAll,faUsers,faGear} from '@fortawesome/free-solid-svg-icons';
import {faTrello} from '@fortawesome/free-brands-svg-icons';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-boards',
  imports: [NavbarComponent,
            FontAwesomeModule,
            CdkAccordionModule,
            CommonModule
  ],
  templateUrl: './boards.component.html',
  styleUrl: './boards.component.css',
})
export class BoardsComponent {

  faBox = faBox;
  faWaveSquare = faWaveSquare;
  faTrello = faTrello;
  faClock= faClock;
  faAngleUp = faAngleUp;
  faAngleDown = faAngleDown;
  faHeart = faHeart;
  faBorderAll = faBorderAll;
  faUsers = faUsers;
  faGear = faGear;

  items = [
    {
      label: 'Item 1',
      items: [
        {
          label:'Sub Item1.1'
        },
        {
          label:'Sub Item1.1'
        }
      ]
    },
    {
      label: 'Item 2',
      items: [
        {
          label:'Sub Item2.1'
        }
      ]
    },
    {
      label: 'Item 3',
      items: [
        {
          label:'Sub Item3.1'
        },
        {
          label:'Sub Item3.2'
        },
        {
          label:'Sub Item3.3'
        }
      ]
    }
  ];

  expandedIndex = 0
}
