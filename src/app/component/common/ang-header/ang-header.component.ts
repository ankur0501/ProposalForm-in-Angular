import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-ang-header',
  templateUrl: './ang-header.component.html',
  styleUrls: ['./ang-header.component.css', '../ng-style/ng-style.component.css']
})
export class AngHeaderComponent implements OnInit {

  isChatboat: boolean = false;

  @ViewChild('sidenav', { static: false }) sidenav: MatSidenav;

  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();

  }

  constructor() { }

  ngOnInit() {
  }

  // @HostListener("window:scroll", [])
  // onWindowScroll(event) {
  //   event.stopPropagation();
  // }
  getChatBoat(e) {
    this.isChatboat = !this.isChatboat;
  }
  closeBoat() {
    this.isChatboat = false;
  }

  getBodyFixed(e){
    let body = document.getElementsByTagName('body')[0];
    body.classList.add("cdk-global-scrollblock");

    // let body = document.getElementsByClassName('body')[0];

    let sidebarFooter = document.getElementsByClassName('sidenav-footer')[0];
    console.log(sidebarFooter)
    sidebarFooter.classList.add("fixed-pos");
    


  }

  getBodyFixedRem(){
    let body = document.getElementsByTagName('body')[0];
    body.classList.remove("cdk-global-scrollblock");
    let sidebarFooter = document.getElementsByClassName('sidenav-footer')[0];
    sidebarFooter.classList.remove("fixed-pos");
  }
  // onSideNavScroll(event) { event.stopPropagation() }
}
