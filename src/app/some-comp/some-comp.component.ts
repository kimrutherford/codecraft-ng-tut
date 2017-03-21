import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-some-comp',
  templateUrl: './some-comp.component.html',
  styleUrls: ['./some-comp.component.css']
})
export class SomeCompComponent implements OnInit {
  @Input() anArg;
  
  constructor() { }

  ngOnInit() {
  }

}
