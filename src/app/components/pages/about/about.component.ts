import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public name = 'Zangar';
  public myId = 'testId';
  public isDisabled = false;
  constructor() { }
  logMessage(value) {
    console.log(value);
  }
  ngOnInit() {
  }

}
