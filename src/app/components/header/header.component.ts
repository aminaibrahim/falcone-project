import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  resetText: string= 'Reset';
  HomeText: string = 'GeekTrust Home';
  separationSlash : string = ' | ';
  constructor() { }

  ngOnInit(): void {
  }

}
