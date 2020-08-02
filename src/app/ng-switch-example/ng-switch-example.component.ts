import { Component, OnInit } from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-ng-switch-example',
  templateUrl: './ng-switch-example.component.html',
  styleUrls: ['./ng-switch-example.component.css']
})
export class NgSwitchExampleComponent{

  title:string = 'ngSwitch Example';

 studentList: Array<any> = new Array<any>();

 datePipeString : any="2020-04-01";

    constructor(private datePipe: DatePipe){
      console.log(Date.now());
      this.datePipeString = datePipe.transform(new Date,'yyyyMMdd');
   console.log(this.datePipeString);
 this.studentList = [
 { StudentId: 1, Name: 'Smith', Course: 'B.Sc.', Grade: 'A' },
 { StudentId: 2, Name: 'John', Course: 'B.A.', Grade: 'B' },
 { StudentId: 3, Name: 'David', Course: 'B.Com.', Grade: 'A' },
 { StudentId: 4, Name: 'Peter', Course: 'B.Sc.', Grade: 'C' },
 { StudentId: 5, Name: 'Fleming', Course: 'MBA', Grade: 'B' },
 { StudentId: 6, Name: 'Jacob', Course: 'M.Sc.', Grade: 'B' },
 { StudentId: 7, Name: 'Donald', Course: 'MBA', Grade: 'A' },
 { StudentId: 8, Name: 'Martin', Course: 'M.Tech', Grade: 'C' },
 { StudentId: 9, Name: 'Alina', Course: 'MCA', Grade: 'D' },
 { StudentId: 10, Name: 'Ronald', Course: 'B.Tech', Grade: 'A' }
 ];
 //Sort The Array List by Grade Property
 this.studentList.sort((a,b) => (a.Grade > b.Grade) ? 1 : ((a.Grade < b.Grade) ? -1 : 0));
 }
}
