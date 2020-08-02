import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'ng-connection-service';
import { IpServiceService } from './ip-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DynamicFormControl';
  ipAddress: string;

  constructor(private connection: ConnectionService, private ip: IpServiceService) {
    this.connection.monitor().subscribe((isconencted) => {
      if (isconencted) {
        alert("Online");
      } else {
        alert("Offline");
      }
    });
  }

  ngOnInit(): void {
    this.getIP();
    //alert("asaassa");
  }
  getIP() {
    this.ip.getIPAddress().subscribe((res: any) => {
      this.ipAddress = res.ip;
    });
  }
}
