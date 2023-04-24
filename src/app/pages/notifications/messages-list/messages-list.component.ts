import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.scss'],
})
export class MessagesListComponent implements OnInit {

  
  constructor() { }

  

  ngOnInit() { }

  onDragItem(event: any) {
    const slidingItem = event.target as HTMLIonItemSlidingElement;
    const optionsContainer = slidingItem.querySelector('ion-item') as HTMLElement;
    optionsContainer.style.transform = "translate3d(-111px, 0px, 0px)"

  }

}
