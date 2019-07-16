import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { IMyDrpOptions, IMyDateRangeModel } from 'mydaterangepicker';
import {
  IMyOptions,
  IMyDefaultMonth,
  IMyDateModel,
  IMyDpOptions
} from 'mydatepicker';

import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  formate: any;
  formate1: any;
  formrange: any;
  formrange1: any;
  public form: FormGroup;
  sdate: any;
  edate: any;
  dob: any = new Date();
  title = 'datepicker';

  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'mm/dd/yyyy',
    showTodayBtn: false,
    firstDayOfWeek: 'mo',
    sunHighlight: true,
    todayBtnTxt: 'today',
    satHighlight: true,
    markCurrentDay: true,
    showDecreaseDateBtn: true,
    disableUntil: {
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      day: new Date().getDate()
    }
  };

  // Set default month to February of 2017
  private defaultMonth: IMyDefaultMonth = {
    defMonth: moment()
      .add(18, 'year')
      .format('mm/dd/yyyy')
  };

  public myDatePickerOptions1: IMyDpOptions = {
    dateFormat: 'mm/dd/yyyy',
    showTodayBtn: false,
    firstDayOfWeek: 'mo',
    sunHighlight: true,
    todayBtnTxt: 'today"',
    satHighlight: true,
    markCurrentDay: true,
    showDecreaseDateBtn: true,
    disableUntil: {
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      day: new Date().getDate()
    }
  };
  public myDateRangePickerOptions: IMyDrpOptions = {
    dateFormat: 'mm/dd/yyyy',
    firstDayOfWeek: 'mo',
    sunHighlight: true,
    height: '34px',
    width: '260px',
    inline: false,
    alignSelectorRight: false,
    indicateInvalidDateRange: true
  };
  public myDateRangePickerOptions1: IMyDrpOptions = {
    dateFormat: 'mm/dd/yyyy',
    firstDayOfWeek: 'mo',
    sunHighlight: true,
    height: '34px',
    width: '260px',
    inline: false,
    alignSelectorRight: false,
    indicateInvalidDateRange: true
  };

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.form = this.formBuilder.group({
      date: new FormControl({ value: new Date() }, [Validators.required]),
      date1: new FormControl({ value: '' }, [Validators.required]),
      range: new FormControl({ value: '' }, [Validators.required]),
      range1: new FormControl({ value: '' }, [Validators.required])
    });
    // this.dob = new Date();
    // this.form.patchValue({
    //   date: {
    //     formatted: `${this.dob.getMonth() +
    //       1}/${this.dob.getDate()}/${this.dob.getFullYear()}`
    //   },
    //   date1: {
    //     formatted: `${this.dob.getMonth() +
    //       1}/${this.dob.getDate()}/${this.dob.getFullYear()}`
    //   }
    // });
  }

  DateChanged(event: IMyDateModel) {
    console.log(event, 'mhvjf');
    this.myDatePickerOptions = {
      disableUntil: {
        year: new Date(event.jsdate).getFullYear(),
        month: new Date(event.jsdate).getMonth() + 1,
        day: new Date(event.jsdate).getDate()
      }
    };
    this.myDateRangePickerOptions = {
      disableUntil: {
        year: new Date(event.jsdate).getFullYear(),
        month: new Date(event.jsdate).getMonth() + 1,
        day: new Date(event.jsdate).getDate()
      }
    };
    this.form.patchValue({
      range: {
        beginDate: {
          year: new Date(event.jsdate).getFullYear(),
          month: new Date(event.jsdate).getMonth() + 1,
          day: new Date(event.jsdate).getDate()
        },
        endDate: {
          year: new Date().getFullYear(),
          month: new Date().getMonth() + 1,
          day: new Date().getDate()
        }
      }
    });

    this.formate = event.formatted;
    console.log(this.formate, 'one');
  }

  onDateChanged(event: IMyDateModel) {
    this.formate1 = event.formatted;
    this.form.patchValue({
      range: {
        beginDate: {
          year: new Date(this.formate).getFullYear(),
          month: new Date(this.formate).getMonth() + 1,
          day: new Date(this.formate).getDate()
        },
        endDate: {
          year: new Date(event.formatted).getFullYear(),
          month: new Date(event.formatted).getMonth() + 1,
          day: new Date(event.formatted).getDate()
        }
      }
    });
    this.myDateRangePickerOptions = {
      disableSince: {
        year: new Date(event.jsdate).getFullYear(),
        month: new Date(event.jsdate).getMonth() + 1,
        day: new Date(event.jsdate).getDate()
      }
    };
  }

  onDateRangeChanged(event: IMyDateRangeModel) {
    console.log(event);
    this.formate = moment(event.beginDate).subtract(1, 'months').format('MM/DD/YYYY');
    this.formate1 = moment(event.endDate).subtract(1, 'months').format('MM/DD/YYYY');
    console.log(event.beginDate, 'event');
    console.log(this.formate, 'formate');
    console.log(this.formate1, 'formate1');
    // console.log(event.beginDate.year, "begin");
    // console.log(event.endDate, "end");

    this.form.patchValue({
      date: {
        jsdate: new Date(event.beginJsDate),
        formatted: `${event.beginJsDate.getMonth() +
          1}/${event.beginJsDate.getDate()}/${event.beginJsDate.getFullYear()}`
      },
      date1: { jsdate: new Date(event.endJsDate) }
    });
    this.myDatePickerOptions = {
      disableUntil: {
        year: new Date(event.beginJsDate).getFullYear(),
        month: new Date(event.beginJsDate).getMonth() + 1,
        day: new Date(event.beginJsDate).getDate()
      }
    };
    this.myDatePickerOptions1 = {
      disableSince: {
        year: new Date(event.endJsDate).getFullYear(),
        month: new Date(event.endJsDate).getMonth() + 1,
        day: new Date(event.endJsDate).getDate()
      }
    };
  }

  onDateRangeChanged1(event: IMyDateRangeModel) {
    console.log(event);
    // this.form.patchValue({
    //   range1: {
    //     beginDate: {
    //       year: new Date().getFullYear(),
    //       month: new Date().getMonth() + 1,
    //       day: new Date().getDate()
    //     },
    //     endDate: {
    //       year: new Date().getFullYear(),
    //       month: new Date().getMonth() + 1,
    //       day: new Date().getDate()
    //     }
    //   }
    // });

    this.formate = moment(event.beginDate).subtract(1, 'months').format('MM/DD/YYYY');
    this.formate1 = moment(event.endDate).subtract(1, 'months').format('MM/DD/YYYY');
    console.log(event.beginDate, 'event');
    console.log(this.formate, 'formate');
    console.log(this.formate1, 'formate1');
    // console.log(event.beginDate.year, "begin");
    // console.log(event.endDate, "end");

    this.form.patchValue({
      date: {
        jsdate: new Date(event.beginJsDate),
        formatted: `${event.beginJsDate.getMonth() +
          1}/${event.beginJsDate.getDate()}/${event.beginJsDate.getFullYear()}`
      },
      date1: { jsdate: new Date(event.endJsDate) }
    });
    this.myDatePickerOptions = {
      disableUntil: {
        year: new Date(event.beginJsDate).getFullYear(),
        month: new Date(event.beginJsDate).getMonth() + 1,
        day: new Date(event.beginJsDate).getDate()
      }
    };
    this.myDatePickerOptions1 = {
      disableSince: {
        year: new Date(event.endJsDate).getFullYear(),
        month: new Date(event.endJsDate).getMonth() + 1,
        day: new Date(event.endJsDate).getDate()
      }
    };
    console.log(this.form.value);
  }
}
