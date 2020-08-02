import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-fund-performance',
  templateUrl: './fund-performance.component.html',
  styleUrls: ['./fund-performance.component.css', '../../component/common/ng-style/ng-style.component.css']
})
export class FundPerformanceComponent implements OnInit {

  payFor = new FormControl('35', [Validators.required]);
  equityDropdown = new FormControl('Equity250', [Validators.required]);
  lockingPeriod = new FormControl('7', [Validators.required]);
  equityNAV = new FormControl('NAV', [Validators.required]);

  highcharts = Highcharts;

  fundTabSelect = 'graph';

  // chartOptions1 = {
  //   chart: {

  //     width: 1100,
  //     height: 350,
  //     // defaultSeriesType: 'areaspline'
  //   },
  //   tooltip: {
  //     pointFormat: "Amout invested ₹  {point.y:,.1f} "
  //   },

  //   xAxis: {
  //     title: {
  //       text: "No. of Years"
  //     },
  //     type: 'datetime',
  //     labels: {
  //       format: '{value:%Y}'
  //     },
  //     gridLineWidth: 1,
  //     minorGridLineWidth: 1
  //   },

  //   yAxis: {
  //     title: {
  //       text: "Returns",
  //       labels: {
  //         format: '{value:%}'
  //       }
  //     },
  //     gridLineWidth: 1,
  //     minorGridLineWidth: 1
  //   },
  //   plotOptions: {
  //     series: {
  //       marker: {
  //         enabled: false
  //       }
  //     }
  //   },
  //   series: [{
  //     name: 'Equity 250',
  //     data: [
  //       10, 19, 15, 12, 13, 12, 14, 17, 15, 16, 16, 9, 2, 12, 12, 15, 16, 2, 12, 6, 15, 2, 16, -5, 10, 19, 15,
  //       ],
  //     pointStart: Date.UTC(2012, 1, 9),
  //     // pointEnd: Date.UTC(2019, 0, 1),        
  //     pointInterval: 365 * 1 * 3600 * 1000,
  //     color: "#ec703a",
  //   },
  //   {
  //     name: 'NIFTY 50',
  //     data: [
  //       16, 2, 12, 6, 15, 2, 16, -5, 10, 19, 15, 12, 13, 12, 14, 17, 15, 16, 16, 9, 2, 12, 12, 15, 16, 2, 12,
  //       ],
  //     pointStart: Date.UTC(2012, 1, 9),
  //     // pointEnd: Date.UTC(2019, 0, 1),        
  //     pointInterval: 365 * 1 * 3600 * 1000,
  //     color: "#7096dc",
  //   }]


  // }
  chartOptions1 = {  
    chart: {
      
      width: 1100,
      reflow: true,
      height: 350,
      // defaultSeriesType: 'areaspline'
    },
    tooltip: {
        pointFormat: "Amout invested ₹  {point.y:,.1f} "
    },
    
    xAxis: {
        title:{
          text: "No. of Years"
        },
        type: 'datetime',
        labels: {
           format: '{value:%Y}'
        },
        gridLineWidth: 1,
        minorGridLineWidth: 1
    },
    
		yAxis:{
      title:{
        text: "Returns",
        labels: {
          format: '{value:%}'
       }
      },
      gridLineWidth: 1,
      minorGridLineWidth: 1
    },
    plotOptions: {
      series: {
          marker: {
              enabled: true
          }
      }
  },
    series: [{
        name: 'Equity 250',
        data: [10,19,15,12,13,12,14,17,15,16,16,9,2,12,12,15,16,2,12,6,15,2,16,-5,10,19,15,],
        pointStart: Date.UTC(2012, 1, 9),
        // pointEnd: Date.UTC(2019, 0, 1),        
        pointInterval: 365 * 1 * 3600 * 1000,
        color:"#ec703a",
    },
    {
      name: 'NIFTY 50',
      data: [16,2,12,6,15,2,16,-5,10,19,15,12,13,12,14,17,15,16,16,9,2,12,12,15,16,2,12,6,],
      pointStart: Date.UTC(2012, 1, 9),
      // pointEnd: Date.UTC(2019, 0, 1),        
      pointInterval: 365 * 1 * 3600 * 1000,
      color:"#7096dc",
  }]


 }

  constructor(public dialogRef: MatDialogRef<FundPerformanceComponent>) { }

  ngOnInit() {
  }

  closeDialog() {
    let body = document.getElementsByTagName('body')[0];
    body.classList.remove("cdk-global-scrollblock");
    this.dialogRef.close();
  }

  getFundTabSelect(val) {
    this.fundTabSelect = val;
  }
}
