import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', '../ng-style/ng-style.component.css']
})
export class HeaderComponent implements OnInit {
  
  isChatboat:boolean=false;

  constructor() { }

  ngOnInit() {
  }

  getChatBoat(e){
    // alert(this.isChatboat)
    this.isChatboat=!this.isChatboat;
    // alert(this.isChatboat)
  }
  closeBoat(){
    this.isChatboat=false;
  }

 
}
