
import { Component, OnInit, Input} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { IMyOptions, IMyDateModel, IMyDpOptions, IMyInputFieldChanged } from 'mydatepicker';
import { EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-child-datepicker',
  templateUrl: './child-datepicker.component.html',
  styleUrls: ['./child-datepicker.component.scss']
})
export class ChildDatepickerComponent implements OnInit {
  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'mm-dd-yyyy',
    showTodayBtn: false,
    firstDayOfWeek: 'mo',
    sunHighlight: true,
    todayBtnTxt: 'today',
    satHighlight: true,
    markCurrentDay: true,
    showDecreaseDateBtn: true
  };
  constructor(private fb1: FormBuilder) {}
  child: FormGroup;

  // childDate = 'Hello';
  @Output() childDate1: EventEmitter<any> = new EventEmitter();
  // @Input() Message: any;
  ngOnInit() {
    this.child = this.fb1.group({
      item: new FormControl(),
    });
  }
  // ngOnChanges(): void {
  //   // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
  //   // Add '${implements OnChanges}' to the class.

  //   console.log(this.Message);
  //   this.child.patchValue({

  //      item: { date: {
  //       year: new Date(this.Message).getFullYear(),
  //       month: new Date(this.Message).getMonth() + 1,
  //       day: new Date(this.Message).getDay() 
  //       }
  //     },
  //     formatted: this.Message

  //   });
  //   console.log(this.child);

  // }

  OnDateChanged($event: IMyDateModel ) {
    console.log(this.child.value);
    console.log($event);
    this.childDate1.emit($event.formatted);
    console.log($event.formatted, 'dataaaaa');
    // this.child.patchValue({
    //   item: this.Message,

    // });
  }
  // onInputFieldChanged(event: IMyInputFieldChanged) {
  //   console.log( event.value);
  //   console.log(this.Message, 'mess');
  //   this.child.patchValue({
  //     item: this.Message,

  //   });
  }




