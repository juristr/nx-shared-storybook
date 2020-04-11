import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sharedstorybook-greeter',
  templateUrl: './greeter.component.html',
  styleUrls: ['./greeter.component.scss']
})
export class GreeterComponent implements OnInit {

  @Input()
  name: string;

  constructor() { }

  ngOnInit(): void {
  }

}
