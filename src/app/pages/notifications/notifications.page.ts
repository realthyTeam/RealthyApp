import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
  segmentSelected: string = "notifications";

  constructor() { }

  ngOnInit() {
  }

  segmentListChanged(ev: any) {
    this.segmentSelected = ev.detail['value'];
}

}
