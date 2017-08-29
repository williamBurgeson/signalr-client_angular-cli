import { Component, OnInit } from '@angular/core';

import { TransferMode, HttpClient } from 'signalr-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  ngOnInit() {
    //console.log(TransferMode.Binary);
    var http = new HttpClient();
  }
}
