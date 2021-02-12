import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sharedstorybook-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {

  @Input()
  eventName: string;

  constructor() { }

  ngOnInit(): void {
  }

}
