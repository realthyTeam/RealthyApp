import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-code-auth',
  templateUrl: './code-auth.page.html',
  styleUrls: ['./code-auth.page.scss'],
})
export class CodeAuthPage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }
  onInputChange(event: any) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/[^0-9]/g, '').slice(0, 1);
  }
  goBack() {
    this.location.back();
  }
}


