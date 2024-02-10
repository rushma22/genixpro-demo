import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  selectedDate: boolean = false;

  @ViewChild('popover') popover!: { event: Event; };

  isOpen = false;

  presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }
  
  constructor() { }

  ngOnInit() {
  }

  viewDate(){
    this.selectedDate= true;
  }

}
