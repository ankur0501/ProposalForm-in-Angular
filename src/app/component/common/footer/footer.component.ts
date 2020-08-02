import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css', '../ng-style/ng-style.component.css']
})
export class FooterComponent implements OnInit {

  showExpansionWeb = false;
  changedIcon1 = false;
  changedIcon2 = false;
  changedIcon3 = false;
  changedIcon4 = false;
  changedIcon5 = false;
  changedIcon6 = false;
  changedIcon7 = false;

  constructor() { }

  ngOnInit() {
  }

  showExpansionFooterWeb() {
    this.showExpansionWeb = !this.showExpansionWeb;
  }

  changeIcon(val) {
    switch (val) {
      case 1:
        this.changedIcon1 = !this.changedIcon1;
        break;
      case 2:
        this.changedIcon2 = !this.changedIcon2;
        break;
      case 3:
        this.changedIcon3 = !this.changedIcon3;
        break;
      case 4:
        this.changedIcon4 = !this.changedIcon4;
        break;
      case 5:
        this.changedIcon5 = !this.changedIcon5;
        break;
      case 6:
        this.changedIcon6 = !this.changedIcon6;
        break;
      case 7:
        this.changedIcon7 = !this.changedIcon7;
        break;
    }
  }
}
