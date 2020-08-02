import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import {MatSort,MatSortHeader} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import * as Highcharts from 'highcharts';
import { Router } from '@angular/router';
import { FundPerformanceComponent } from 'src/app/widgets/fund-performance/fund-performance.component';
import { GetQuotePopupComponent } from '../../../widgets/get-quote-popup/get-quote-popup.component';
import { EditGrowMoneyComponent } from '../../../widgets/edit-grow-money/edit-grow-money.component';
import { ChildDreamComponent } from '../../../widgets/child-dream/child-dream.component';

import { MAT_SELECT_SCROLL_STRATEGY } from '@angular/material/select';
import { Overlay, BlockScrollStrategy } from '@angular/cdk/overlay';

export function scrollFactory(overlay: Overlay): () => BlockScrollStrategy {
  return () => overlay.scrollStrategies.block();
}


@Component({
  selector: 'app-fund',
  templateUrl: './ulip-fund.component.html',
  styleUrls: ['./ulip-fund.component.css', '../../common/ng-style/ng-style.component.css'],
  providers: [
    { provide: MAT_SELECT_SCROLL_STRATEGY, useFactory: scrollFactory, deps: [Overlay] }
  ]
})

export class UlipFundComponent implements OnInit {
  highcharts = Highcharts;
  customePlan = false;
  customePlanSelected = false;
  showBenefitsBreakups = false;
  breakUp = false;
  rupeesSignPrefix = true;
  // inrRegular="^(\d{1,2})(,\d{2})*(,\d{1,3}){1}(\.\d{1,})?$";

  show = false;
  toggle = false;
  toggle1 = false;
  isChild = false;

  myself = new FormControl('myself', [Validators.required]);
  payment = new FormControl('m', [Validators.required]);
  insuranceCover = new FormControl('50,00,000', [Validators.required]);
  term= new FormControl('1', [Validators.required]);
  payFor= new FormControl('35', [Validators.required]);
  returnper= new FormControl('NAV', [Validators.required]);
  equityDropdown= new FormControl('Equity250', [Validators.required]);
  lockingPeriod= new FormControl('7', [Validators.required]);
  equityNAV= new FormControl('NAV', [Validators.required]);
  ourReturn= new FormControl('35', [Validators.required]);
  
  valCust;
  selectedItem = null;
  equityTabSelect = 'graph';
  fundTabSelect = 'graph';
  errorMsg;
  customize = false;
  isExpand = true;
  premiumHistory = true;
  equityCard = true;
  equityCard1 = false;
  basicDetails = false;
  // displayedColumns: string[] = ['period', 'premium', 'allocation', 'taxes', 'fundValue']; 
  // dataSource = new MatTableDataSource(ELEMENT_DATA);

  // @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    
    // this.dataSource.sort = this.sort;

    // if (ELEMENT_DATA.length == 0) {
    //   this.errorMsg = true;
    // }
    this.selectedItem = 1;
  }

  chartOptions = {
    chart: {
      type: 'column',

      width: 675,
      height: 350,
      defaultSeriesType: 'areaspline'
    },
    title: {
      text: null
    },
    subtitle: {
    },
    xAxis: {
      categories: [
        '35Yrs',
        '40Yrs',
        '45Yrs',
        '50Yrs',
        '55Yrs',
        '60Yrs',
        '65Yrs',
      ],
      crosshair: true,
      labels: {
        fontSize: 11,
        color: "#5b5b5b",
      }
    },
    yAxis: {
      gridLineWidth: 0,
      minorGridLineWidth: 0,
      min: 0,
      max: 40,
      tickInterval: 5,
      title: {
        text: null
      },
      labels: {
        format: '{value} L',
        fontSize: 11,
        color: "#5b5b5b",
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
      footerFormat: '</table>',
      shared: false,
      useHTML: true
    },
    plotOptions: {
      series: {
        shadow: false,
        pointWidth: 25,
      },
    },
    series: [{

      name: 'Your Investment',
      data: [5, 12.2, 24.4, 29.2, 34.0, 36.0, 39.6],
      color: "#ec703a",
    }, {
      name: 'Booster Addition',
      data: [0, 1, 2, 3.4, 4, 4.2, 5],
      color: "#7096dc",
      pointWidth: 25,
      padding: -20,
      pointPadding: -10,
      gap: 0
    },]
  }

  chartOptions1 = {
    chart: {

      width: 1200,
      height: 350,
      // defaultSeriesType: 'areaspline'
    },
    tooltip: {
      pointFormat: "Amout invested ₹  {point.y:,.1f} "
    },

    xAxis: {
      title: {
        text: "No. of Years"
      },
      type: 'datetime',
      labels: {
        format: '{value:%Y}'
      },
      gridLineWidth: 1,
      minorGridLineWidth: 1
    },

    yAxis: {
      title: {
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
      data: [10, 19, 15, 12, 13, 12, 14, 17, 15, 16, 16, 9, 2, 12, 12, 15, 16, 2, 12, 6, 15, 2, 16, -5, 10, 19, 15,],
      pointStart: Date.UTC(2012, 1, 9),
      // pointEnd: Date.UTC(2019, 0, 1),        
      pointInterval: 365 * 1 * 3600 * 1000,
      color: "#ec703a",
    },
    {
      name: 'NIFTY 50',
      data: [16, 2, 12, 6, 15, 2, 16, -5, 10, 19, 15, 12, 13, 12, 14, 17, 15, 16, 16, 9, 2, 12, 12, 15, 16, 2, 12, 6,],
      pointStart: Date.UTC(2012, 1, 9),
      // pointEnd: Date.UTC(2019, 0, 1),        
      pointInterval: 365 * 1 * 3600 * 1000,
      color: "#7096dc",
    }]


  }

  //  chartOptions1 = {
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
  //     }
  //   },

  //   yAxis: {
  //     title: {
  //       text: "Returns",
  //       labels: {
  //         format: '{value:%}'
  //       }
  //     },
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
  //       10, 19, 15, 12, 13, 12, 14, 17, 15, 16, 16, 9, 2, 12, 12, 15, 16, 2, 12, 6, 15, 2, 16, -5, 10, 19, 15,
  //       10, 19, 15, 12, 13, 12, 14, 17, 15, 16, 16, 9, 2, 12, 12, 15, 16, 2, 12, 6, 15, 2, 16, -5, 10, 19, 15,
  //       10, 19, 15, 12, 13, 12, 14, 17, 15, 16, 16, 9, 2, 12, 12, 15, 16, 2, 12, 6, 15, 2, 16, -5, 10, 19, 15,
  //       10, 19, 15, 12, 13, 12, 14, 17, 15, 16, 16, 9, 2, 12, 12, 15, 16, 2, 12, 6, 15, 2, 16, -5, 10, 19, 15,
  //       10, 19, 15, 12, 13, 12, 14, 17, 15, 16, 16, 9, 2, 12, 12, 15, 16, 2, 12, 6, 15, 2, 16, -5, 10, 19, 15,
  //       10, 19, 15, 12, 13, 12, 14, 17, 15, 16, 16, 9, 2, 12, 12, 15, 16, 2, 12, 6, 15, 2, 16, -5, 10, 19, 15
  //     ],
  //     pointStart: Date.UTC(2012, 1, 9),
  //     // pointEnd: Date.UTC(2019, 0, 1),        
  //     pointInterval: 365 * 1 * 3600 * 1000,
  //     color: "#ec703a",
  //   },
  //   {
  //     name: 'NIFTY 50',
  //     data: [
  //       16, 2, 12, 6, 15, 2, 16, -5, 10, 19, 15, 12, 13, 12, 14, 17, 15, 16, 16, 9, 2, 12, 12, 15, 16, 2, 12,
  //       16, 2, 12, 6, 15, 2, 16, -5, 10, 19, 15, 12, 13, 12, 14, 17, 15, 16, 16, 9, 2, 12, 12, 15, 16, 2, 12,
  //       16, 2, 12, 6, 15, 2, 16, -5, 10, 19, 15, 12, 13, 12, 14, 17, 15, 16, 16, 9, 2, 12, 12, 15, 16, 2, 12,
  //       16, 2, 12, 6, 15, 2, 16, -5, 10, 19, 15, 12, 13, 12, 14, 17, 15, 16, 16, 9, 2, 12, 12, 15, 16, 2, 12,
  //       16, 2, 12, 6, 15, 2, 16, -5, 10, 19, 15, 12, 13, 12, 14, 17, 15, 16, 16, 9, 2, 12, 12, 15, 16, 2, 12,
  //       16, 2, 12, 6, 15, 2, 16, -5, 10, 19, 15, 12, 13, 12, 14, 17, 15, 16, 16, 9, 2, 12, 12, 15, 16, 2, 12,
  //       16, 2, 12, 6, 15, 2, 16, -5, 10, 19, 15, 12, 13, 12, 14, 17, 15, 16, 16, 9, 2, 12, 12, 15, 16, 2, 12,
  //     ],
  //     pointStart: Date.UTC(2012, 1, 9),
  //     // pointEnd: Date.UTC(2019, 0, 1),        
  //     pointInterval: 365 * 1 * 3600 * 1000,
  //     color: "#7096dc",
  //   }]


  // }

  hidePremiumHistory() {
    this.premiumHistory = !this.premiumHistory;
  }

  hideEquityCard() {
    this.equityCard = !this.equityCard;
  }

  hideEquityCard1() {
    this.equityCard1 = !this.equityCard1;
  }

  customizeFund() {
    this.customize = true;
  }
  recommendedFund() {
    this.customize = false;
  }

  getFundTabSelect(val) {
    this.fundTabSelect = val;
  }

  listClick(newValue) {
    // console.log(newValue);
    this.selectedItem = newValue;
    // this.equityTabSelect='graph';
  }

  getChildDream() {
    this.dialog.open(ChildDreamComponent, {
      panelClass: 'child-dream-container'
    });
  }

  getEquityTabSelect(val) {
    // console.log(val);
    this.equityTabSelect = val;
  }

  editGetQuote() {
    this.dialog.open(GetQuotePopupComponent, {
      panelClass: 'get-quote-popup-container',
      backdropClass: 'popupBackdropClass',
    });
  }
  getGrowMoney() {
    this.dialog.open(EditGrowMoneyComponent, {
      panelClass: 'edit-grow-money-container'
    });
  }

  getSummery() {
    this.router.navigate(['/ulip-summary']);
  }

  getErrorMessageCover() {
    return this.insuranceCover.hasError('required') ? 'You must enter a value' :
      '';
  }

  remove() {
    this.toggle1 = !this.toggle1
  }

  showBenefits() {
    this.showBenefitsBreakups = true;
  }

  showBenefitsLess() {
    this.showBenefitsBreakups = false;
  }
  hideBasicDetails() {
    this.basicDetails = !this.basicDetails;
  }
  getAmntValue(val) {
    if (val) {
      this.rupeesSignPrefix = true;
    }
    else {
      this.rupeesSignPrefix = false;
    }
  }

  selectChild(val) {
    this.isChild = !this.isChild
  }

  fundPerformance() {
    this.dialog.open(FundPerformanceComponent, {
      panelClass: 'fund-performance-container'
    });
  }

  slideConfig = { 
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    draggable: false,
    //dots: true,
    arrows:true,
   // variableWidth: true
   responsive: [{
    breakpoint: 1201,
    settings: {
      slidesToShow: 3, 
      variableWidth: false,
    }
  }, {
    breakpoint: 1025,
    settings: {
      slidesToShow: 2.3,
      dots: false,
      draggable: true,
      variableWidth: true
    }

  }]
    
   };


}
