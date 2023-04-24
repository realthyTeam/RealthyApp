import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss'],
})
export class NotificationListComponent implements OnInit {

  filterButton1Selected: boolean = false;
  filterButton2Selected: boolean = false;
  filterButton3Selected: boolean = false;
  filterButton4Selected: boolean = false;

  constructor() { }

  onClickFilter1(){
    this.filterButton1Selected = !this.filterButton1Selected;
    this.filterButton2Selected = false;
    this.filterButton3Selected = false;
    this.filterButton4Selected = false;
    
    console.log(this.filterButton1Selected)
  }
  onClickFilter2(){
    this.filterButton2Selected = !this.filterButton2Selected;
    this.filterButton1Selected = false;
    this.filterButton3Selected = false;
    this.filterButton4Selected = false;
    console.log(this.filterButton2Selected)
  }
  onClickFilter3(){
    this.filterButton3Selected = !this.filterButton3Selected;
    this.filterButton1Selected = false;
    this.filterButton2Selected = false;
    this.filterButton4Selected = false;
    console.log(this.filterButton1Selected)
  }
  onClickFilter4(){
    this.filterButton4Selected = !this.filterButton4Selected;
    this.filterButton1Selected = false;
    this.filterButton2Selected = false;
    this.filterButton3Selected = false;
    console.log(this.filterButton4Selected)
  }

  ngOnInit() { }

  onDragItem(event: any) {
    const slidingItem = event.target as HTMLIonItemSlidingElement;
    const optionsContainer = slidingItem.querySelector('ion-item') as HTMLElement;
    optionsContainer.style.transform = "translate3d(-111px, 0px, 0px)"

  }
}
