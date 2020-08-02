import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { trigger, transition, animate, style, state } from '@angular/animations'

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.css', '../ng-style/ng-style.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ 'max-height': '0px', 'opacity': '0', 'visibility': 'hidden' }),
        animate('1800ms ease-in-out', style({ 'max-height': '500px', 'opacity': '1', 'visibility': 'visible' }))
      ]),
      transition(':leave', [
        style({ 'max-height': '500px', 'opacity': '1', 'visibility': 'hidden' }),
        animate('1800s ease-in-out', style({ 'max-height': '0px', 'opacity': '0', 'visibility': 'visible' }))
      ])
    ])
  ]
})
export class SubHeaderComponent implements OnInit {
  show = false;

  @ViewChild('body', { static: true }) body;

  constructor(private _eref: ElementRef) {
    document.addEventListener('click', this.offClickHandler.bind(this));
  }


  ngOnInit() {
  }

  offClickHandler(event: any) {
    if (!event.target.classList.contains('expansion-item')) { // check click origin
      this.show = false;
    }
  }

  toggle() {
    this.show = !this.show;
  }

}
