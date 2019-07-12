import { Component, OnInit } from '@angular/core';
import { IMyDpOptions, IMyDateModel } from 'mydatepicker';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { IMyDrpOptions } from 'mydaterangepicker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  dob: any;

   private model: any = {beginDate: {year: 2018, month: 10, day: 9},
  endDate: {year: 2018, month: 10, day: 19}};

  constructor(private formBuilder: FormBuilder) {}
  title = 'datepicker';
  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'mm/dd/yyyy',
    // editableDateField: true,
     showTodayBtn: false,
    firstDayOfWeek: 'mo',
      sunHighlight: true,
      todayBtnTxt: 'today',
      satHighlight: true,
      markCurrentDay: true,
      showDecreaseDateBtn: true,
    // disableUntil: { year: 2000, month: 8, day: 1 },
    disableSince: { year: 1998, month: 12, day: 31 }
  };
  public myDatePickerOptions1: IMyDpOptions = {
    dateFormat: 'dd/mm/yyyy',
        disableUntil: { year: new Date(this.dob).getFullYear() - 8,
          month: new Date(this.dob).getMonth(), day:  new Date(this.dob).getDate() },
        // disableUntil: {
        //   year: new Date().getFullYear() - 8, month: new Date().getMonth(),
        //   day:  new Date().getDate()
        // }


        // disableSince: { year: 1998, month: 12, day: 31 }
  };
  myDateRangePickerOptions: IMyDrpOptions = {
    dateFormat: 'dd/mm/yyyy'
  };
  formate: any;
  formate1: any;
  public form: FormGroup;
  DateChanged(event: IMyDateModel) {
    this.formate = event.formatted;
    console.log(this.form.value.date);
  }
  onDateChanged(event: IMyDateModel) {
    this.formate1 = event.formatted;
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      date: new FormControl({ value: new Date() }, [Validators.required]),
      date1: new FormControl({ value: new Date() }, [Validators.required]),
      range: new FormControl({ value: '' }, [Validators.required])
    });
    this.dob = new Date();
    this.form.patchValue({
      date: {
        formatted: `${this.dob.getMonth() +
          1}/${this.dob.getDate()}/${this.dob.getFullYear()}`
      },
      date1: {
        formatted: `${this.dob.getMonth() +
          1}/${this.dob.getDate()}/${this.dob.getFullYear()}`
      }
    });
  }
}
